import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import EventBanner from "../components/EventBanner";
import { Container, Row, Col } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, loadUser } from "../redux/actions/auth";

import TextField from "@material-ui/core/TextField";

const Admin = ({ auth }) => {
  //const getInitialProps({store}) {}

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleInputChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(email + " " + password);
    login(email, password);
    console.log("after method");
  };

  return (
    <Layout HomePage={true}>
      <div>
        <div id="main">
          <section>
            <div className="inner center">
              <Row>
                <Col xs={4} className="center login-form">
                  <form onSubmit={e => handleSubmit(e)}>
                    <h2 className="admin-h2">Admin Login</h2>
                    <h3 className="admin-h3">Email Address</h3>
                    <TextField
                      id="standard-basic"
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="email"
                      value={email}
                      autoComplete="email"
                      autoFocus
                      onChange={e => handleInputChange(e)}
                    />
                    <h3 className="admin-h3">Password</h3>
                    <TextField
                      id="standard-basic"
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      value={password}
                      type="password"
                      autoComplete="current-password"
                      onChange={e => handleInputChange(e)}
                    />

                    <button type="submit" className="btn btn-dark btn-block">
                      Submit
                    </button>
                  </form>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

Admin.propTypes = {
  login: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, loadUser })(Admin);
