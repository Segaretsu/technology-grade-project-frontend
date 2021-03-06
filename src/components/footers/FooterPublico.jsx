import React from 'react';
import Link from 'next/link'
import { APP_NAME } from '@constants/Constants'
import { Button, Container, Grid, Header, List, Segment } from 'semantic-ui-react';

export default function FooterPublico() {
    return (
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content={APP_NAME} />
                            <List link inverted>
                                <List.Item><Link href='/nosotros'><a>Acerca de</a></Link></List.Item>
                                <List.Item as='a'><Link href='/nosotros'><a>Contactanos</a></Link></List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
                                Redes sociales
                                </Header>
                                <p>
                                {/* <Link href="https://www.facebook.com/Arjeware-753778911629883"><a>A</a></Link> */}
                                <Button circular color='facebook' icon='facebook'
                                    href="https://www.facebook.com/Arjeware-753778911629883" target="_blank"
                                    rel="noreferrer"
                                />
                                </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    );
}