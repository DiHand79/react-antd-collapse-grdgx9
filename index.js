import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
import './index.css';
import { Collapse } from 'antd';

function CollapseBugSample(props) {
  const { Panel } = Collapse;

  let [expand, setExpand] = useState(false);

  function callback(key) {
    console.log(key);
    setExpand((prev) => !prev);
  }

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  const linkANTDDoc = 'https://ant.design/components/collapse#collapsepanel';

  function AsItWillWork() {
    return (
      <Collapse defaultActiveKey="1">
        <Panel header="This is a nested panel" key="1">
          <h3>{JSON.stringify(expand)}</h3>
          <p>{text}</p>
        </Panel>
      </Collapse>
    );
  }

  return (
    <Collapse
      onChange={callback}
      items={[
        {
          key: 1,
          label: <b>{'test label, Expand: ' + expand}</b>,
          // header: 'test header',  // not work
          children: <Panel header={AsItWillWork()} key="1"></Panel>,
        },
        {
          key: 2,
          // label: 'test label',
          header: 'test header',
          children: (
            <>
              <h3>{JSON.stringify(expand)}</h3>
              <p>{text}</p>
            </>
          ),
        },
        {
          key: 3,
          label: 'test label',
          // header: 'test header',
          children: (
            <Panel
              header={
                <>
                  <h3>{JSON.stringify(expand)}</h3>
                  <p>{text}</p>
                </>
              }
              key="3"
            ></Panel>
          ),
        },
        {
          key: 4,
          label: 'test label',
          // header: 'test header',
          children: (
            <Panel header="Bad Sample Work - NOT WoRk" key="4">
              <h3>{JSON.stringify(expand)}</h3>
              <p>{text}</p>
            </Panel>
          ),
        },
      ]}
    />
  );
}

ReactDOM.render(<CollapseBugSample />, document.getElementById('container'));
