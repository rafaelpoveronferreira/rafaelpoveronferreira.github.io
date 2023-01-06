import vite from "../assets/vite.svg"
import react from "../assets/react.svg"
import js from "../assets/js.svg"
import redux from "../assets/redux.svg"
import tailwind from "../assets/tailwind.svg"
import node from "../assets/node.svg"
import jwt from "../assets/jwt.svg"
import stripe from "../assets/stripe.svg"
import mongodb from "../assets/mongodb.svg"


const ptBR = {
    home: {
        gridMaskText: 'Clique para me conhecer',
        subheader: 'desenvolvedo',
        linkToProjects: 'clique para ver meu portfolio'
    },
    projects: [{
        title: 'Comércio eletrônico Full-Stack',
        techList: [[vite, "Vite"],
        [react, "React"],
        [js, "JavaScript"],
        [redux, "Redux"],
        [tailwind, "Tailwind"],
        [node, "NodeJS"],
        [jwt, "JWT"],
        [stripe, "Stripe"],
        [mongodb, "MongoDB"]],
        description: [
            'Desenvolvido em stack MERN (MongoDB + ExpressJS + ReactJS + NodeJS',
            'Servidor de produção hospedado na plataforma Railway (https://niehs.up.railway.app/)',
            'Integrado com testnet Stripe para pagamentos',
            "Frontend desenvolvido sem uso de templates",
            "Ainda que funcional, não se trata de produto comercial. Desenvolvido principalmente para auto-aprendizado",
            "Código fonte disponível em minha página do github.",
            "Próximas features: 1- Página do administrado onde será possível submeter operações CRUD ao Banco de Dados; 2- Perfil customizável para cada usuário; 3- Otimização do código; 4- Review da segurança do servidor NodeJS; 4- Terminar implementação de mais opções de língua além do português brasileiro; 4- Sistema de busca."
        ]
    }],
    contact: {
        header: 'Vamos conversar?'
    }
}

export default ptBR
