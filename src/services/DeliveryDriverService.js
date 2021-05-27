import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/deliverydriver";

class DeliveryDriverService {
  createDeliveryDriver(driver) {
    return axios.post(USER_API_BASE_URL, driver);
  }
}

export default new DeliveryDriverService();
