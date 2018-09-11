import { createHttpClient } from '@iota/http-client'
import { composeAPI } from '@iota/core';
const Mam = require('mam.client/lib/mam.node');
exports.index = (req, res) => {
    res.render('index', {
        title: 'Home'
    });

    const httpIota = ('https://testnet140.tangle.works');
  const client = createHttpClient({
    provider: httpIota
  });
  let mamState = Mam.init(client);
console.log(client);
// Publish to tangle
  const publish = async packet => {
    // Create MAM Payload - STRING OF TRYTES
    const message = Mam.create(mamState, packet);
    // Save new mamState
    mamState = message.state;
    // Attach the payload.
    // console.log('Root: ', message.root);
    // console.log('Address: ', message.address);
    // console.log('Payload', message.payload);
    await Mam.attach(message.payload, message.address);

    // Fetch Stream Async to Test
    const resp = await Mam.fetch(message.root, 'public', null, console.log);
    console.log(resp);
  };

  publish('POTATO');
};

  // iota.getNodeInfo().then(info =>
  //   console.log(info))
  //   .catch(err => {})};