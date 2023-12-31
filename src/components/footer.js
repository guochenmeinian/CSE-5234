import Footer from 'rc-footer';
import React from 'react';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import './footer.css';

const AppFooter = () => (
  <Footer
    className="footer"
    onClick={() => {}}
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
        icon: <img src="/other-images/footer-more-info-icon.png" alt="More Info" />,
        title: 'More Info',
        items: [
          {
            icon: <img src="/other-images/footer-deploy-site-icon.png" alt="Deploy Site" />,
            title: 'Deploy Site',
            url: 'https://main.d3og35m6b202fa.amplifyapp.com',
            description: '',
            openExternal: true,
          },
          {
            icon: <img src="/other-images/footer-github-repo-icon.png" alt="Github Repo" />,
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

export default AppFooter;
