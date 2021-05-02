import React from 'react';
import { Accordion, Card, Container } from 'react-bootstrap';

const Faq = () => {
   return (
      <Container className="faq mb-5">
         <div className="title mb-5">
            <h3>FAQ</h3>
         </div>
         <Accordion defaultActiveKey="0">
            <Card>
               <Accordion.Toggle
                  className="accordion-header"
                  as={Card.Header}
                  eventKey="0"
               >
                  𝐖𝐡𝐢𝐜𝐡 𝐦𝐞𝐭𝐡𝐨𝐝𝐬 𝐨𝐟 𝐩𝐚𝐲𝐦𝐞𝐧𝐭 𝐝𝐨 𝐲𝐨𝐮 𝐚𝐜𝐜𝐞𝐩𝐭?
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="0">
                  <Card.Body>
                  𝐘𝐨𝐮 𝐜𝐚𝐧 𝐩𝐚𝐲 𝐮𝐬 𝐛𝐲 𝐜𝐫𝐞𝐝𝐢𝐭 𝐨𝐫 𝐝𝐞𝐛𝐢𝐭 𝐜𝐚𝐫𝐝, 𝐢𝐟 𝐲𝐨𝐮 𝐚𝐫𝐞 𝐚 𝐩𝐫𝐞𝐦𝐢𝐮𝐦 𝐬𝐞𝐫𝐯𝐢𝐜𝐞 𝐜𝐮𝐬𝐭𝐨𝐦𝐞𝐫 𝐲𝐨𝐮 𝐜𝐚𝐧 𝐚𝐥𝐬𝐨 𝐩𝐚𝐲 𝐛𝐲 𝐛𝐚𝐧𝐤 𝐭𝐫𝐚𝐧𝐬𝐟𝐞𝐫. 𝐘𝐨𝐮 𝐰𝐢𝐥𝐥 𝐫𝐞𝐜𝐞𝐢𝐯𝐞 𝐚 𝐕𝐀𝐓 𝐢𝐧𝐯𝐨𝐢𝐜𝐞.
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
            <Card>
               <Accordion.Toggle
                  className="accordion-header"
                  as={Card.Header}
                  eventKey="1"
               >
                  𝐇𝐨𝐰 𝐦𝐮𝐜𝐡 𝐭𝐢𝐦𝐞 𝐢𝐭 𝐰𝐢𝐥𝐥 𝐭𝐚𝐤𝐞 𝐭𝐨 𝐠𝐞𝐭 𝐚 𝐧𝐞𝐰 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧?
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="1">
                  <Card.Body>
                  𝐍𝐨𝐭 𝐦𝐮𝐜𝐡 𝐭𝐢𝐦𝐞. 𝐈𝐟 𝐲𝐨𝐮 𝐟𝐢𝐥𝐥 𝐮𝐩 𝐭𝐡𝐞 𝐟𝐨𝐫𝐦 𝐚𝐧𝐝 𝐩𝐚𝐲 𝐚𝐥𝐥 𝐭𝐡𝐞 𝐫𝐞𝐪𝐮𝐢𝐫𝐞𝐝 𝐟𝐞𝐞𝐬 𝐭𝐡𝐞𝐧 𝐲𝐨𝐮 𝐰𝐢𝐥𝐥 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧 𝐰𝐢𝐭𝐡𝐢𝐧 𝐚𝐧 𝐡𝐨𝐮𝐫.
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
            <Card>
               <Accordion.Toggle
                  className="accordion-header"
                  as={Card.Header}
                  eventKey="2"
               >
                  𝐀𝐫𝐞 𝐲𝐨𝐮 𝐩𝐫𝐨𝐯𝐢𝐝𝐞 𝐭𝐡𝐞 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧 𝐮𝐬𝐢𝐧𝐠 𝐎𝐩𝐭𝐢𝐜𝐚𝐥 𝐅𝐢𝐛𝐞𝐫?
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="2">
                  <Card.Body>
                  𝐘𝐞𝐬 𝐰𝐞 𝐚𝐫𝐞 𝐩𝐫𝐨𝐯𝐢𝐝𝐢𝐧𝐠 𝐭𝐡𝐞 𝐢𝐧𝐭𝐞𝐫𝐧𝐞𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧 𝐮𝐬𝐢𝐧𝐠 𝐎𝐩𝐭𝐢𝐜𝐚𝐥 𝐅𝐢𝐛𝐞𝐫 𝐂𝐚𝐛𝐥𝐞.
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
         </Accordion>
      </Container>
   );
};

export default Faq;
