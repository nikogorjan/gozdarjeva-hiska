import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { useTranslation } from 'react-i18next';
import BlogItem from './items/BlogItem';

import blogThumb1 from '../../public/assets/images/my-images/p1.png'; 
import blogThumb2 from '../../public/assets/images/my-images/p2.png'; 
import blogThumb3 from '../../public/assets/images/my-images/p3.png'; 
import blogThumb4 from '../../public/assets/images/my-images/p4.png'; 
import blogThumb5 from '../../public/assets/images/my-images/p5.png'; 
import blogThumb6 from '../../public/assets/images/my-images/p6.png'; 

const Blog = () => {
  const { t } = useTranslation();

  const blogs = [
    {
      id: 1,
      thumb: blogThumb1,
      title: t("blog.1.title"),
      linkText: t("blog.1.linkText"),
      location: t("blog.1.location"),
    },
    {
      id: 2,
      thumb: blogThumb2,
      title: t("blog.2.title"),
      linkText: t("blog.2.linkText"),
      location: t("blog.2.location"),
    },
    {
      id: 3,
      thumb: blogThumb3,
      title: t("blog.3.title"),
      linkText: t("blog.3.linkText"),
      location: t("blog.3.location"),
    },
    {
      id: 4,
      thumb: blogThumb4,
      title: t("blog.4.title"),
      linkText: t("blog.4.linkText"),
      location: t("blog.4.location"),
    },
    {
      id: 5,
      thumb: blogThumb5,
      title: t("blog.5.title"),
      linkText: t("blog.5.linkText"),
      location: t("blog.5.location"),
    },
    {
      id: 6,
      thumb: blogThumb6,
      title: t("blog.6.title"),
      linkText: t("blog.6.linkText"),
      location: t("blog.6.location"),
    },
  ];

  return (
    <>
      <section className="blog padding-t-60 padding-b-120">
        <div className="container container-two">
          <SectionHeading 
            headingClass="section-heading style-left style-flex flx-between align-items-end gap-3"  
            subtitle={t("blogSection.subtitle")}
            subtitleClass="" 
            title={t("blogSection.title")}
            renderDesc={false}
            desc=""
            renderButton={true}
            buttonClass="btn-outline-main"
            buttonText={t("blogSection.buttonText")}
            buttonLink='https://www.booking.com/hotel/si/gozdarjeva-hiska-m-amp-k.sl.html?aid=356980&label=Share-ekKMUUa%401739115847'
          />
          <div className="row gy-4">
            {blogs.map((blog, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <BlogItem blog={blog}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
