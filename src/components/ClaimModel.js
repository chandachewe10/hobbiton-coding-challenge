import { Modal, Form, Col, Row, Button } from "react-bootstrap";
import useAuth from '../contexts/Auth'

export function ClaimModelNotification({ singleDoc, handleClose, changeClaimStatus }) {
  const { authClaims } = useAuth()
  return <div>
      <Modal.Header closeButton>
          <Modal.Title>View Claim Settlement</Modal.Title>
        </Modal.Header>
        <Form id="update_claim" onSubmit={changeClaimStatus}>
          <Modal.Body>
              <div className="mb-3">
                Status:
                {singleDoc.status === "pending" &&
                    <span
                      style={{backgroundColor: "#337ab7", padding: ".4em .6em", borderRadius: ".25em", color: "#fff", fontSize: "85%"}}
                    >{singleDoc.status}</span>
                 }
                 {singleDoc.status === "settled" &&
                    <span
                      style={{backgroundColor: "#3EC089", padding: ".4em .6em", borderRadius: ".25em", color: "#fff", fontSize: "85%"}}
                    >{singleDoc.status}</span>
                 }
                 {singleDoc.status === "cancelled" &&
                    <span
                      style={{backgroundColor: "#dc3545", padding: ".4em .6em", borderRadius: ".25em", color: "#fff", fontSize: "85%"}}
                    >{singleDoc.status}</span>
                 }
              </div>

              {authClaims.admin &&
                <Form.Group as={Row} >
                  <Form.Label htmlFor="status">Settle Claim</Form.Label>
                  <Form.Select id="status">
                    <option value="hide">Change Status</option>
                    <option value="pending">Pending</option>
                    <option value="settled">Settle</option>
                    <option value="cancelled">Cancel</option>
                  </Form.Select>
                </Form.Group>
              }

              <hr />

              <h6>Client Details</h6>
              <Row className="mb-3">
                <Form.Group>
                  <Form.Label htmlFor="claimantName">Name</Form.Label>
                  <p>{singleDoc.claimantName}</p>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="claimantPhoneNumber">
                    Phone Number
                  </Form.Label>
                  <p>{singleDoc.claimantPhoneNumber}</p>
                </Form.Group>
              </Row>

            

              <hr />
            

              <h6>Sticker Details</h6>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "start",
                }}
              >
                <Form.Label htmlFor="dateReported">Date Reported</Form.Label>
                <p>{singleDoc.dateReported}</p>
              </Form.Group>
              <Form.Group
                as={Col}
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "start",
                }}
              >
                <Form.Label htmlFor="policyType">Policy Type</Form.Label>
                <p>{singleDoc.policyType}</p>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              
              <Form.Group
                as={Col}
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "start",
                }}
              >
                <Form.Label htmlFor="stickerNumber">Sticker No.</Form.Label>
                <p>{singleDoc.stickerNumber}</p>
              </Form.Group>

              <Form.Group
                as={Col}
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "start",
                }}
              >
                <Form.Label htmlFor="numberPlate">Plate No.</Form.Label>
                <p>{singleDoc.numberPlate}</p>
              </Form.Group>
            </Row>
              
            <Row className="mb-3">
                <Form.Group
                  as={Col}
                  style={{
                    display: "flex",
                    "flex-direction": "column",
                    "align-items": "start",
                  }} className="mb-3"
                >
                  <Form.Label htmlFor="dateOfIncident">
                    Date of Incident
                  </Form.Label>
                  <p>{singleDoc.dateOfIncident}</p>
                </Form.Group>

                <Form.Group
                  as={Col}
                  style={{
                    display: "flex",
                    "flex-direction": "column",
                    "align-items": "start",
                  }}
                >
                  <Form.Label htmlFor="estimate">Claim Estimate</Form.Label>
                  <p>{singleDoc.estimate}</p>
                </Form.Group>
            </Row>
          </Modal.Body>

          {authClaims.admin &&
            <Modal.Footer>
              <Button variant="dark" type="submit" onClick={handleClose}id="submit">
                Submit claim settlement
              </Button>
            </Modal.Footer>
          }

        </Form>
  </div>;
}

export function ClaimModel({singleDoc, handleClose, handleFieldChange, modalSubmit}) {

    return <div>
        <Modal.Header closeButton>
          <Modal.Title>Edit {singleDoc.claimantName}'s Claim</Modal.Title>
        </Modal.Header>
        <Form id="update_claim" onSubmit={modalSubmit}>
          <Modal.Body>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "start",
                }}
              >
                <Form.Label htmlFor="dateReported">Date Reported</Form.Label>
                <Form.Control
                  type="date"
                  id="dateReported"
                  defaultValue={singleDoc.dateReported}
                  onChange={handleFieldChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "start",
                }}
              >
                <Form.Label htmlFor="policyType">Policy</Form.Label>
                <Form.Select
                  aria-label="User role"
                  id="policyType"
                  defaultValue={singleDoc.policyType}
                  onChange={handleFieldChange}
                >
                  <option value="hide">--Select Category--</option>
                  <option value="mtp">MTP</option>
                  <option value="comprehensive">Comprehensive</option>
                  <option value="windscreen">Windscreen</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "start",
                }}
              >
                <Form.Label htmlFor="numberPlate">Plate No.</Form.Label>
                <Form.Control
                  type="text"
                  name=""
                  id="numberPlate"
                  defaultValue={singleDoc.numberPlate}
                  placeholder="Enter plate No."
                  onChange={handleFieldChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "start",
                }}
              >
                <Form.Label htmlFor="stickerNumber">Sticker No.</Form.Label>
                <Form.Control
                  type="text"
                  name=""
                  id="stickerNumber"
                  defaultValue={singleDoc.stickerNumber}
                  placeholder="Enter Sticker Number"
                  onChange={handleFieldChange}
                />
              </Form.Group>
            </Row>
            <h5>Claimant Details</h5>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "start",
                }}
              >
                <Form.Label htmlFor="claimantName">Name</Form.Label>
                <Form.Control
                  type="text"
                  name=""
                  id="claimantName"
                  defaultValue={singleDoc.claimantName}
                  placeholder="Enter Claimant's name"
                  onChange={handleFieldChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "start",
                }}
              >
                <Form.Label htmlFor="claimantEmail">Email Address</Form.Label>
                <Form.Control
                  type="text"
                  name=""
                  id="claimantEmail"
                  placeholder="Enter claimant's email"
                  defaultValue={singleDoc.claimantEmail}
                  onChange={handleFieldChange}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "start",
                }}
              >
                <Form.Label htmlFor="claimantPhoneNumber">
                  Phone Number
                </Form.Label>
                <Form.Control
                  type="text"
                  name=""
                  id="claimantPhoneNumber"
                  defaultValue={singleDoc.claimantPhoneNumber}
                  placeholder="Enter Claimant's phone number"
                  onChange={handleFieldChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "start",
                }}
              >
                <Form.Label htmlFor="dateOfIncident">
                  Date of Incident
                </Form.Label>
                <Form.Control
                  type="date"
                  name=""
                  id="dateOfIncident"
                  defaultValue={singleDoc.dateOfIncident}
                  onChange={handleFieldChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "start",
                }}
              >
                <Form.Label htmlFor="estimate">Claim Estimate</Form.Label>
                <Form.Control
                  type="text"
                  name=""
                  id="estimate"
                  defaultValue={singleDoc.estimate}
                  placeholder="Enter Claim Estimate"
                  onChange={handleFieldChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "start",
                }}
              >
                <Form.Label htmlFor="estimate">Details Of incident</Form.Label>
                <Form.Control
                  type="text"
                  name=""
                  id="detailsOfIncident"
                  defaultValue={singleDoc.detailsOfIncident}
                  placeholder="Enter Claim Estimate"
                  onChange={handleFieldChange}
                />
              </Form.Group>
            </Row>
            
          </Modal.Body>
          <Modal.Footer>
          <Button
              variant="dark"
              type="submit"
              onClick={handleClose}
              id="submit"
            >
              Submit
            </Button>
          </Modal.Footer>
        </Form>
    </div>
}
