


import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Container from '../components/container';
import styles from "./about.module.scss"
import './team.css'

const User = props => (

<div className="team-page__member member aos-init aos-animate" data-aos="fade-up">
    <div className="member__photo-container">
        <img className="member__img" src="http://kancelaria-as.osomapps.com/img/Adam3.jpg" alt=""/>
        <img className="member__img" src="http://kancelaria-as.osomapps.com/img/Dorota2.jpg" alt=""/>
        <img className="member__img" src="http://kancelaria-as.osomapps.com/img/Ewelina1.jpg" alt=""/>

    </div>
    <div className="member__text-block">
        <h3>
            {props.username}
        </h3>
        <p>
            Adwokat
        </p>
        <p>
            {props.excerpt}
        </p>
        <p>
            Prowadzi obsługę prawną przedsiębiorstw z branży budowlanej, energetycznej oraz IT.
            Reprezentuje klientów przed sądami oraz przed KIO. Doradza klientom w procesach inwestycyjnych
            i przekształcaniu spółek. Jest obrońcą w procesach karnych gospodarczych. Ukończył Uniwersytet
            Łódzki Wydział Prawa i Administracji oraz Szkołę Główną Handlową. Pod patronatem Prezesa Urzędu
            Zamówień Publicznych ukończył studia z zakresu prawa zamówień publicznych.
        </p>
        <p>
            <img className="member__icon" src="" alt=""/> adam@swiecki.com.pl
        </p>
    </div>
</div>
  )

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <section class="team-page" id="team-page">
    <div class="team-page__container">
        <header class="team-page__header aos-init aos-animate" data-aos="zoom-in">
            <div class="team-page__title-container">
                <h1>Działamy zespołowo</h1>
                <h2>
                    Klienci doceniają naszą umiejętność pracy zespołowej
                </h2>
            </div>
        </header>
        <div class="team-page__members">
        <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
        </div>
    </div>


    </section>
  </Layout>
)

export default AboutPage
