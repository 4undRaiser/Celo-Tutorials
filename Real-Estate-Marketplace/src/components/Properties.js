import React from "react";
import { useState } from "react";
import { Card, Badge, Col, Stack, Row } from "react-bootstrap";

export const Properties = (props) => {
  const [newprices, setNewPrices] = useState([]);
  const [prices, setPrices] = useState([]);

  return (
    <Row xs={1} md={3} className="g-4">
      {props.properties.map((property) => (
        <Col key={property.id}>
          <Card className="h-100">
            <Card.Header>
              <Stack direction="horizontal" gap={2}>
                <Badge bg="secondary" className="ms-auto">
                  {property.id} ID
                </Badge>

                <Badge bg="secondary" className="ms-auto">
                  {property.price  / 1000000000000000000} cUSD
                </Badge>
              </Stack>
            </Card.Header>

            <div className=" ratio ratio-4x3">
              <img
                src={property.image}
                alt={property.location}
                style={{ objectFit: "cover" }}
              />
            </div>

            <Card.Body className="d-flex  flex-column text-center">

            <Card.Title className="flex-grow-1">
              {property.location}
              </Card.Title>

              <Badge bg="secondary" className="ms-auto">
                  {property.forSale ? "Forsale" : "Not Forsale"}
                </Badge>


             {property.owner === props.walletAddress && property.forSale === true && (
              <button
                    type="button"
                    onClick={() => props.withdrawSale(property.id)}
                    class="btn btn-dark btn-sm mt-1"
                  >
                    withdraw sale
                  </button>
              )}
           

         { property.owner === props.walletAddress &&(
              <form>
                <div class="form-r">
                  <input
                    type="number"
                    class="form-control mt-3"
                    value={newprices[property.id] || ""}
                    onChange={(e) => {
                      const newPrices = [...newprices];
                      newPrices[property.id] = e.target.value;
                      setNewPrices(newPrices);
                    }}
                    placeholder="Enter new price"
                  />
                  <button
                    type="button"
                    onClick={() => props.changePrice(property.id, newprices[property.id])}
                    class="btn btn-dark btn-sm mt-1"
                  >
                    Change Price
                  </button>
                </div>
              </form>
             )}

        { property.owner === props.walletAddress && property.forSale === false && (
              <form>
                <div class="form-r">
                  <input
                    type="number"
                    class="form-control mt-3"
                    value={prices[property.id] || ""}
                    onChange={(e) => {
                      const salePrices = [...prices];
                      salePrices[property.id] = e.target.value;
                      setPrices(salePrices);
                    }}
                    placeholder="enter price"
                  />

                  <button
                    type="button"
                    onClick={() => {
                      console.log("Price for property ID", property.id, ":", prices[property.id]);
                      props.sellProperty(property.id, prices[property.id]);
                    }}
                    class="btn btn-dark mt-1"
                  >
                    Sell property
                  </button>
                </div>
              </form>
             )}

            { property.owner !== props.walletAddress && property.forSale === true && (
             
                  <button
                    type="button"
                    onClick={() => props.buyProperty(property.id)}
                    class="btn btn-dark mt-1"
                  >
                    Buy Property
                  </button>
               
             )}

             
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
