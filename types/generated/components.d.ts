import type { Schema, Attribute } from '@strapi/strapi';

export interface Discription1GridImages extends Schema.Component {
  collectionName: 'components_discription_1_grid_images';
  info: {
    displayName: '1-Grid-Images';
    icon: 'picture';
  };
  attributes: {
    OneGridImages: Attribute.Media;
  };
}

export interface Discription2GridImages extends Schema.Component {
  collectionName: 'components_discription_2_grid_images';
  info: {
    displayName: '2-Grid-Images';
    icon: 'picture';
  };
  attributes: {
    TwoGridImages: Attribute.Media;
  };
}

export interface Discription3GridImages extends Schema.Component {
  collectionName: 'components_discription_3_grid_images';
  info: {
    displayName: '3-Grid-Images';
  };
  attributes: {
    ThreeGridImages: Attribute.Media;
  };
}

export interface Discription4GridImages extends Schema.Component {
  collectionName: 'components_discription_4_grid_images';
  info: {
    displayName: '4-Grid-Images';
  };
  attributes: {
    FourGridImages: Attribute.Media;
  };
}

export interface DiscriptionCorImages extends Schema.Component {
  collectionName: 'components_de_text_cor_images';
  info: {
    displayName: 'Cor-Images';
    description: '';
  };
  attributes: {
    CoroucelImages: Attribute.Media;
  };
}

export interface DiscriptionDeText extends Schema.Component {
  collectionName: 'components_de_text_de_texts';
  info: {
    displayName: 'Description';
    icon: 'file';
    description: '';
  };
  attributes: {
    Discription: Attribute.Blocks;
  };
}

export interface DiscriptionEmbed extends Schema.Component {
  collectionName: 'components_discription_embeds';
  info: {
    displayName: 'embed';
  };
  attributes: {
    embed: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'discription.1-grid-images': Discription1GridImages;
      'discription.2-grid-images': Discription2GridImages;
      'discription.3-grid-images': Discription3GridImages;
      'discription.4-grid-images': Discription4GridImages;
      'discription.cor-images': DiscriptionCorImages;
      'discription.de-text': DiscriptionDeText;
      'discription.embed': DiscriptionEmbed;
    }
  }
}
