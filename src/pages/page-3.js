import React from "react"
import { Link } from "gatsby"
import { PopupWidget } from "react-calendly"
import "../components/testpages.css"

const SecondPage = () => (
  <div>
    <h1>Calendly floating button</h1>
    <Link to="/">Done with your tests? Go back to the homepage</Link>

    <PopupWidget
  branding
  color="#00a2ff"
  pageSettings={{
    backgroundColor: 'ffffff',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '00a2ff',
    textColor: '4d5055'
  }}
  prefill={{
    customAnswers: {
      a1: 'a1',
      a10: 'a10',
      a2: 'a2',
      a3: 'a3',
      a4: 'a4',
      a5: 'a5',
      a6: 'a6',
      a7: 'a7',
      a8: 'a8',
      a9: 'a9'
    },
    email: 'test@test.com',
    firstName: 'Jon',
    lastName: 'Snow',
    name: 'Jon Snow'
  }}
  text="Schedule time with Chrono!"
  textColor="#ffffff"
  url="https://calendly.com/chronogroupllc/60min"
  utm={{
    utmCampaign: 'Spring Sale 2019',
    utmContent: 'Shoe and Shirts',
    utmMedium: 'Ad',
    utmSource: 'Facebook',
    utmTerm: 'Spring'
  }}
/>

  </div>
)

export default SecondPage
