// src/env.d.ts
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface SiteData {
  home: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
  };
  about: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
    methods: Array<{
      type: string;
      value: string;
      link: string;
    }>;
  };
}