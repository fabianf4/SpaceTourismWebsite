import {Title, Container, SubTitle1, P, Explore, Container3} from '../../components/styled'

export default function Index() {
    return (
        <>
            <Container
            backgroundMobile="/SpaceTourismWebsite/home/background-home-mobile.jpg"
            backgroundTablet="/SpaceTourismWebsite/home/background-home-tablet.jpg"
            backgroundDesktop="/SpaceTourismWebsite//home/background-home-desktop.jpg">
                <Container3>
                    <SubTitle1>So, you want to travel to</SubTitle1>
                    <Title>Space</Title>
                    <P>
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                    </P>
                </Container3>
                <Explore>
                    <span>Explore</span>
                </Explore>
            </Container>
        </>
    )
}
