import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentesImagenPrincipal extends Schema.Component {
  collectionName: 'components_componentes_imagen_principals';
  info: {
    displayName: 'imagenPrincipal';
    icon: 'expand';
  };
  attributes: {
    mobile: Attribute.Media & Attribute.Required;
    desk: Attribute.Media & Attribute.Required;
  };
}

export interface LayoutIconText extends Schema.Component {
  collectionName: 'components_layout_icon_texts';
  info: {
    displayName: 'IconText';
    icon: 'check';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    text: Attribute.String & Attribute.Required;
  };
}

export interface LayoutLinkPagina extends Schema.Component {
  collectionName: 'components_layout_link_paginas';
  info: {
    displayName: 'LinkPagina';
    icon: 'attachment';
  };
  attributes: {
    texto: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface LayoutSocialLinks extends Schema.Component {
  collectionName: 'components_layout_social_links';
  info: {
    displayName: 'SocialLinks';
    icon: 'earth';
    description: '';
  };
  attributes: {
    icono: Attribute.Media & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'componentes.imagen-principal': ComponentesImagenPrincipal;
      'layout.icon-text': LayoutIconText;
      'layout.link-pagina': LayoutLinkPagina;
      'layout.social-links': LayoutSocialLinks;
    }
  }
}
