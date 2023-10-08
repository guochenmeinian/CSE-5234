import Footer from 'rc-footer';
import React from "react";
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import './footer.css'

const SampleFooter = () => ( 
  
// run <npm install rc-footer> and <npm install rc-switch> 
<Footer className='footer'
  onClick={() => {}}
  autoFocus
  columns={[
    {
      title: 'contact us',
      items: [
        {
          title: 'adress',
          url: 'https://www.osu.edu/',
          openExternal: true,
        },
        {
          title: 'email',
          url: 'mailto:guo.2034@osu.edu',
          openExternal: true,
        },
        {
          title: 'phone',
          url: '/about',
          openExternal: true,
        },
      ],
    },
    {
      icon: (
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
          alt="more products"
        />
      ),
      title: 'more info',
      items: [
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
              alt="project repo"
            />
          ),
          title: 'deploy site',
          url: 'https://main.d2v8q1c89t29jt.amplifyapp.com',
          description: 'cse5234',
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
              alt="yuque"
            />
          ),
          title: 'github repo',
          url: 'https://github.com/guochenmeinian/CSE-5234',
          description: 'cse5234',
          openExternal: true,
        },
      ],
    },
  ]}
/>

);


export default () => <SampleFooter />;