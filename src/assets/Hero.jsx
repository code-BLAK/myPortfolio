import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="">
        <div>
            <h1>My name is Adekunle Aderohunbi</h1>
        </div>
        <div>
            <p>I work as a </p>
            <Typed strings={['Software Developer', 'UI/UX Designer,', 'I.T Enthusiast']}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
        </div>
    </div>
  )
}

export default Hero
