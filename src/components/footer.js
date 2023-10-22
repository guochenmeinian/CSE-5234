import Footer from 'rc-footer';
import React from "react";
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import './footer.css'
import GithubRepoIcon from "../images/footer-github-repo-icon.png";
import DeploySiteIcon from "../images/footer-deploy-site-icon.png";
import MoreInfoIcon from "../images/footer-more-info-icon.png";

const AppFooter = () => (
  <Footer className='footer'
    onClick={() => { }}
    autoFocus
    columns={[
      {
        title: 'Contact Us',
        items: [
          {
            title: 'Address [TBD]',
            url: '#',
            openExternal: true,
          },
          {
            title: 'Email',
            url: 'mailto:guo.2034@osu.edu',
            openExternal: true,
          },
          {
            title: 'Phone [TBD]',
            url: '#',
            openExternal: true,
          },
        ],
      },
      {
        icon: (
          <img
            src={MoreInfoIcon}
            alt="More Info"
          />
        ),
        title: 'More Info',
        items: [
          {
            icon: (
              <img
                src={DeploySiteIcon}
                alt="Deploy Site"
              />
            ),
            title: 'Deploy Site',
            url: 'https://main.d2v8q1c89t29jt.amplifyapp.com',
            description: '',
            openExternal: true,
          },
          {
            icon: (
              <img
                src={GithubRepoIcon}
                alt="Github Repo"
              />
            ),
            title: 'Github Repo',
            url: 'https://github.com/guochenmeinian/CSE-5234',
            description: '',
            openExternal: true,
          },
        ],
      },
    ]}
  />
);


export default () => <AppFooter />;