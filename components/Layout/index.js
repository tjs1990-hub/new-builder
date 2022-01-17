import {
  NextSeo,
  LocalBusinessJsonLd,
  FAQPageJsonLd,
  SocialProfileJsonLd
} from 'next-seo';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  const site = 'https://landscapegardenerswestyorkshire.com';

  const router = useRouter();

  const path = router.pathname;

  // props needed
  // title, description, image(url), image(alt), props.children

  return (
    <>
      

      {path === '/' && (
        <LocalBusinessJsonLd
          type="HomeAndConstructionBusiness"
          id={`${site}`}
          name="TJM Landscapes"
          description={props.description}
          url={`${site}${path}`}
          telephone="07475176845"
          address={{
            streetAddress: '9 Copley Hill',
            addressLocality: 'Leeds',
            addressRegion: 'West Yorkshire',
            postalCode: 'WF17 0DT',
            addressCountry: 'UK'
          }}
          geo={{
            latitude: '53.733270',
            longitude: '-1.653650'
          }}
          images={[props.imageURL]}
          sameAs={[
            'https://www.facebook.com/tjmlandscapeswestyorkshire/',
            'https://www.instagram.com/tm_landscapeswy/'
          ]}
          openingHours={[
            {
              opens: '09:00',
              closes: '18:00',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
              ],
              validFrom: '2019-12-23',
              validThrough: '2022-12-30'
            },
            {
              opens: '10:00',
              closes: '14:00',
              dayOfWeek: 'Sunday',
              validFrom: '2019-12-23',
              validThrough: '2020-04-02'
            }
          ]}
          rating={{
            ratingValue: '4.5',
            ratingCount: '20'
          }}
          review={[
            {
              author: 'John Doe',
              datePublished: '2020-05-04',
              name: 'Professionalism and Quality from day 1',
              reviewBody:
                'JM did a fantastic job  renovating our garden with an Indian stone patio. They where very professional and well mannered. Would highly recommend! Thank you!',
              reviewRating: {
                bestRating: '5',
                worstRating: '1',
                reviewAspect: 'Ambiance',
                ratingValue: '5'
              }
            },
            {
              author: 'Bob Smith',
              datePublished: '2020-06-15',
              name: 'Removed some ivy and installed a fence',
              reviewBody:
                'Really happy with the work the guys did, I had a fence put up and some ivy removed from my house. They were very professional and did a brilliant job. Would highly recommend!',
              reviewRating: {
                ratingValue: '5'
              }
            }
          ]}
        />
      )}

      {path === '/' && (
        <FAQPageJsonLd
          mainEntity={[
            {
              questionName: 'How much does a patio cost?',
              acceptedAnswerText:
                'Patio pricing starts from 100m2 depending on the type of stone requested'
            },
            {
              questionName: 'How do i book a landscaping quote?',
              acceptedAnswerText:
                'Head on over to the contact us page where you can request a quote'
            }
          ]}
        />
      )}

      <SocialProfileJsonLd
        type="Organization"
        name="TJM Landscapes"
        url="https://landscapegardenerswestyorkshire.com"
        sameAs={[
          'https://www.facebook.com/tjmlandscapeswestyorkshire/',
          'https://www.instagram.com/tm_landscapeswy/'
        ]}
      />

      <main>
        <Header />
        {props.children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
