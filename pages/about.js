import Meta from '../components/Meta'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

function About() {
    return (
    <div>
        <Meta />
        <Container className="container" align="center">
            <Typography variant="h2">
                What will we create?
            </Typography>
        </Container>
    <style jsx>
        {`
            .container {
                padding-top: 10px;
            }
        `}
    </style>
    </div>
    );
}

export default About;