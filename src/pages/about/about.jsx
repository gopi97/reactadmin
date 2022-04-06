import CommonPageWrap from '../../containers/commonPageWrap/commonPageWrap'

const About = () => {
  return (
    <div>
      <CommonPageWrap>
        <div>
          <h3>About</h3>
          <h5>React CRM Demo App 2.0.0</h5>
          {/*
                     <p>
            This demo app is not a real application. There is no fake API as
            back-end service behind the scene. The advanced search in the demo
            doesn't work properly. Any data update (create or update record)
            will not be stored after hard refresh or logout. The main purpose of
            this demo is just a proof of concept.
          </p>
              
              */}
        </div>
      </CommonPageWrap>
    </div>
  )
}

export default About
