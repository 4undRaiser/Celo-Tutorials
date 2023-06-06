// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract AdvancedPerformanceBasedPayment is AccessControl, ReentrancyGuard {
    using SafeMath for uint256;

    bytes32 public constant EVALUATOR_ROLE = keccak256("EVALUATOR_ROLE");
    bytes32 public constant ARBITER_ROLE = keccak256("ARBITER_ROLE");

    IERC20 public token;
    uint256 public pointsPerToken;

    uint256 public constant MAX_POINTS = 10**30;

    enum PerformanceLevel {LEVEL1, LEVEL2, LEVEL3}

    struct Performance {
        uint256 points;
        PerformanceLevel level;
    }

    mapping(address => Performance) public performances;

    event PerformancePointsAdded(address indexed performer, uint256 points, PerformanceLevel level);
    event PaymentClaimed(address indexed performer, uint256 amount);
    event DisputeResolved(address indexed performer, uint256 points, PerformanceLevel level);

    constructor(IERC20 _token, uint256 _pointsPerToken) {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(EVALUATOR_ROLE, msg.sender);
        _setupRole(ARBITER_ROLE, msg.sender);
        token = _token;
        pointsPerToken = _pointsPerToken;
    }

    function addPerformancePoints(address performer, uint256 _points, PerformanceLevel level) external onlyRole(EVALUATOR_ROLE) {
        require(performances[performer].points.add(_points) <= MAX_POINTS, "Max points limit reached");
        performances[performer].points = performances[performer].points.add(_points);
        performances[performer].level = level;
        emit PerformancePointsAdded(performer, _points, level);
    }

    function claimPayment() external nonReentrant {
        require(performances[msg.sender].points >= pointsPerToken, "Not enough performance points");
        uint256 tokenAmount = performances[msg.sender].points.div(pointsPerToken);
        performances[msg.sender].points = performances[msg.sender].points.mod(pointsPerToken);
        token.transfer(msg.sender, tokenAmount);
        emit PaymentClaimed(msg.sender, tokenAmount);
    }

    function resolveDispute(address performer, uint256 _points, PerformanceLevel level) external onlyRole(ARBITER_ROLE) {
        performances[performer].points = _points;
        performances[performer].level = level;
        emit DisputeResolved(performer, _points, level);
    }
}
