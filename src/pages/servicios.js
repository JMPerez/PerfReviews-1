import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Servicios extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Auditorías de rendimiento web"
        description="Somos expertos consultores en web performance. Hacemos auditorías de sitios web, workshops y talleres. Identificamos problemas de rendimiento y explicamos herramientas y técnicas para corregirlos y prevenirlos."/>
        <h1>Nuestros servicios</h1>
        <h2>Auditorías de rendimiento web</h2>
        <p>Realizamos auditorías de rendimiento de sitios web identificando mejoras para reducir tiempos de carga y tráfico de datos, que mejoran el <i>engagement</i> de los usuarios y con ello las principales métricas de negocio.</p>
        <p>Tenemos una larga experiencia en el desarrollo de proyectos web a escala en empresas como Tuenti, Spotify, Infojobs, Coches, y Mil Anuncios. Con un especial énfasis en usabilidad y performance.</p>
        <p>¿Has visto <a href="https://www.youtube.com/channel/UCNoF5_1loBFvW2lZXPxp8ww">nuestros vídeos</a> y te gustaría una auditoría de tu web?</p>
        <h2>Formación: Workshops y talleres</h2>
        <p>Aprende cuáles son los principales problemas de rendimiento en sitios web, cómo corregirlos y monitorizarlos.</p>
        <p><strong><a href="mailto:perfreviews.mail@gmail.com">Contáctanos por email</a> para condiciones.</strong></p>
      </Layout>
    )
  }
}

export default Servicios

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`