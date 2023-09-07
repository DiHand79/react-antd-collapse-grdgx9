import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Collapse } from 'antd';

function CollapseBugSample(props) {
  const { Panel } = Collapse;

  // let [expand, setExpand] = useState(false);
  let expand = 'test bug';

  function callback(key) {
    console.log(key);
    // setExpand((prev) => !prev);
  }

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  const linkANTDDoc = 'https://ant.design/components/collapse#collapsepanel';

  return (
    <Collapse
      // onChange={callback}
      items={[
        {
          key: 'abc123',
          label: <h3>test</h3>,
          children: <a href={linkANTDDoc}>Doc link</a>,
        },
      ]}
      // items={[
      //   {
      //     key: 1,
      //     // label: 'test label',
      //     // header: 'test header',
      //     children: (
      //       <Panel header="This is panel header 1" key="1">
      //         <Collapse defaultActiveKey="1">
      //           <Panel header="This is a nested panel" key="1">
      //             <h3>{JSON.stringify(expand)}</h3>
      //             <p>{text}</p>
      //           </Panel>
      //         </Collapse>
      //       </Panel>
      //     ),
      //   },
      //   {
      //     key: 2,
      //     // label: 'test label',
      //     // header: 'test header',
      //     children: (
      //       <Panel header="This is panel header 2" key="2">
      //         <h3>{JSON.stringify(expand)}</h3>
      //         <p>{text}</p>
      //       </Panel>
      //     ),
      //   },
      //   {
      //     key: 3,
      //     // label: 'test label',
      //     // header: 'test header',
      //     children: (
      //       <Panel header="This is panel header 3" key="3">
      //         <h3>{JSON.stringify(expand)}</h3>
      //         <p>{text}</p>
      //       </Panel>
      //     ),
      //   },
      // ]}
    />
  );
}

ReactDOM.render(<CollapseBugSample />, document.getElementById('container'));
