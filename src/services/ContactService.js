import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/contact";

class ContactService {
  createContact(contact) {
    return axios.post(USER_API_BASE_URL, contact);
  }
}

export default new ContactService();
