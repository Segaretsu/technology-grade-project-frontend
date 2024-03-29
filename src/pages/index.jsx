import React from 'react'
import Link from 'next/link';
import ImageNext from 'next/image'
import { useRouter } from 'next/router'
import Layout from '@components/layouts/PublicLayout';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    Segment,
} from 'semantic-ui-react'
import { APP_NAME } from '@constants/Constants';
import loginUtils from '@utils/login.utils'
import styles from '@styles/modules/inicio.module.css'

import Tips from '@components/commons/tips/Tips'

const Home = ({ mobile }) => {

    const { headersPrincipales, containerPrincipal } = styles;

    const router = useRouter();

    const goToApp = () => {
        if (loginUtils.verifyAuth()) {
            router.push('/home');
        } else {
            router.push('/login');
        }
    }

    return (
        <Layout>
            <Segment
                inverted
                textAlign='center'
                className={`${headersPrincipales}`}
                vertical
            >
                <Container text className={`${containerPrincipal}`}>
                    <Header
                        className="header__titulo"
                        as='h1'
                        content={APP_NAME}
                        inverted
                    />
                    <Header
                        className="header__subtitulo"
                        as='h2'
                        content='Una forma moderna e interactiva de administrar tu consumo en servicios públicos, mientras contribuyes al cuidado del medio ambiente.'
                        inverted
                    />
                    <Button className="button__iniciar-app" size='huge' onClick={goToApp}>
                        Inicia la aplicación
                        <Icon className='icon__iniciar-app right arrow' />
                    </Button>
                </Container>
            </Segment>
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Controla tus servicios públicos (agua y energía)
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Ten a la mano tu consumo de servicios públicos en tu(s) Hogar(es) siempre que lo
                                necesites, y conoce tu forma de gasto de manera automática o manual, adaptado a
                                tus preferencias.
                            </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Pensado para reducir tu consumo
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                {APP_NAME}, te alerta cuando estás teniendo un desfase en comparación de tu
                            consumo regular, permitiendo detectar aumentos en el consumo de servicios
                            públicos como posibles fugas.
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='large' src='/images/JP_8.webp' alt='ahorro en el hogar' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Link href="/registrar/usuario"><Button size='huge'>Registrate</Button></Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Un poco más de la app
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                {APP_NAME} es un proyecto creado por jóvenes apasionados por el desarrollo de software,
                                para incentivar y permitir a las personas, medir el consumo del agua y energía en sus
                                hogares, de forma automática por medio de sensores, o manual,
                                digitando los registros del contador público.
                            </p>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Tips />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ padding: '8em 0em' }} vertical>
                <Container text>
                    {/* <Header as='h3' style={{ fontSize: '2em' }}>
                        Breaking The Grid, Grabs Your Attention
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Instead of focusing on content creation and hard work, we have learned how to master the
                        art of doing nothing by providing massive amounts of whitespace and generic content that
                        can seem massive, monolithic and worth your attention.
                    </p>
                    <Button as='a' size='large'>
                        Read More
                    </Button> */}

                    {/* <Divider
                        as='h4'
                        className='header'
                        horizontal
                        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                        <a href='#casoEstudio'>Casos de estudio</a>
                    </Divider> */}

                    <Header as='h3' style={{ fontSize: '2em' }} id="casoEstudio" textAlign="center">
                        Nuestros sensores
                    </Header>
                    <p style={{ fontSize: '1.33em', textAlign: 'center' }}>
                        Lleva un registro automático de tu consumo en los servicios públicos, del agua y energía. Conocerás tu gasto diario, y podrás tomar medidas para reducirlo.
                    </p>
                    {/* <Button as='a' size='large'>
                        I'm Still Quite Interested
                    </Button> */}
                </Container>
            </Segment>
        </Layout>
    )
}

export default Home;