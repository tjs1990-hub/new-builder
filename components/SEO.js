import Head from "next/head"
import {useRouter} from 'next/router'
import {NextSeo} from 'next-seo'


const SEO = (props) => {
    const site = 'https://landscapegardenerswestyorkshire.com';




 const router = useRouter()

 const path = router.pathname;




    return(
        <>
        <NextSeo
        title={props.title}
        noindex={false}
        description={props.description}
        canonical={`${site}${path}`}
        openGraph={{
          url: `${site}${path}`,
          title: `${props.title || null}`,
          images: [
            {
              url: `${props.imageURL || null}`,
              alt: `${props.imageALT || null}`,
              type: 'image/web3'
            }
          ],
          site_name: 'TJM Landscapes'
        }}
      />
        </>
    )

}


export default SEO


