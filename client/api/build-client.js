import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    //we are on the server!
    //request should be made to http://ingress-nginx-controller.ingress-nginx.svc.cluster.local
    //http://SERVICENAME.NAMESPACE.svc.cluster.local
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    //we are on the browser!
    // request can be made with the a base url of ''
    return axios.create({
      baseURL: '/',
    });
  }
};

export default buildClient;
