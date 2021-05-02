import 'react-native';
import React from 'react';

import APIService from '../src/Services/API/APIService';

// Note: test renderer must be required after react-native.
//import renderer from 'react-test-renderer';

const ServiceApp = APIService.createApi();

// it('renders correctly', () => {
//   renderer.create(<App />);
// });


describe('Service',()=>{

  const testArr = {
    "values": [
     0, 440, 3, 2, 2, 10, 1, 1, 3000, 4000, 400, 120
    ]
  }

  let resp;

  test('API Predict Test', async() =>{
      resp =  await ServiceApp.postRequisition(testArr);
//      console.log(resp);

      expect(resp.status).toBe(200);
  });

});
