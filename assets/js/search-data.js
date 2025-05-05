// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "People",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/People/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "A growing collection of our cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-join-us",
          title: "Join us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Join%20us/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-dr-dong-will-join-fiu-as-a-tenure-track-assistant-professor",
          title: 'Dr.Dong will join FIU as a tenure-track assistant professor.',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-asplos-23",
          title: 'One paper is accepted by ASPLOS’23.',
          description: "",
          section: "News",},{id: "news-dr-dong-am-invited-to-be-a-tpc-of-ieee-cloud",
          title: 'Dr.Dong am invited to be a TPC of IEEE Cloud.',
          description: "",
          section: "News",},{id: "news-dr-dong-was-invited-as-a-panelsit-for-nsf-proposal-review",
          title: 'Dr.Dong was invited as a panelsit for NSF proposal review.',
          description: "",
          section: "News",},{id: "news-a-paper-auto-hpcnet-an-automatic-framework-to-build-neural-network-based-surrogate-models-for-hpc-applications-is-accepted-in-hpdc-23",
          title: 'A paper “Auto-HPCnet: An Automatic Framework to Build Neural Network-based Surrogate Models for...',
          description: "",
          section: "News",},{id: "news-mlbench-23-will-be-held-alongside-mlsys-on-june-8-2023-in-miami-we-cordially-invite-you-to-attend-our-workshop-and-say-hi",
          title: 'MLbench’23 will be held alongside MLsys on June 8, 2023, in Miami. We...',
          description: "",
          section: "News",},{id: "news-dr-dong-will-serve-as-a-tpc-member-of-the-2024-siam-international-conference-on-data-mining-sdm-24",
          title: 'Dr.Dong will serve as a TPC member of the 2024 SIAM International Conference...',
          description: "",
          section: "News",},{id: "news-dr-dong-will-serve-as-a-tpc-member-of-ccgrid-24-see-call-for-papers-here",
          title: 'Dr.Dong will serve as a TPC member of CCGrid’24. See call for papers...',
          description: "",
          section: "News",},{id: "news-dr-dong-will-serve-as-a-tpc-member-of-sdm-24-and-ccgrid-24",
          title: 'Dr.Dong will serve as a TPC member of SDM’24 and CCGrid’24.',
          description: "",
          section: "News",},{id: "news-dr-dong-will-serve-as-a-student-program-co-chair-of-the-international-conference-on-parallel-processing-icpp-24",
          title: 'Dr.Dong will serve as a Student Program Co-Chair of the International Conference on...',
          description: "",
          section: "News",},{id: "news-dr-dong-am-invited-as-a-panelsit-for-doe-proposal-review",
          title: 'Dr.Dong am invited as a panelsit for DOE proposal review.',
          description: "",
          section: "News",},{id: "news-dr-dong-was-invited-as-a-panelsit-for-doe-proposal-review",
          title: 'Dr.Dong was invited as a panelsit for DOE proposal review.',
          description: "",
          section: "News",},{id: "news-dr-dong-will-serve-as-a-student-program-co-chair-of-international-conference-on-parallel-processing-icpp-24",
          title: 'Dr.Dong will serve as a Student Program Co-Chair of International Conference on Parallel...',
          description: "",
          section: "News",},{id: "news-dr-dong-was-very-honored-to-be-selected-for-the-2023-ieee-computer-society-tchpc-early-career-researchers-award-for-excellence-in-high-performance-computing-website-the-award-ceremony-will-be-at-sc23-in-denver-see-you-there",
          title: 'Dr.Dong was very honored to be selected for the 2023 IEEE Computer Society...',
          description: "",
          section: "News",},{id: "news-dr-dong-was-selected-for-the-2023-ieee-computer-society-tchpc-early-career-researchers-award-for-excellence-in-high-performance-computing-the-award-ceremony-will-be-at-sc23-in-denver",
          title: 'Dr.Dong was selected for the 2023 IEEE Computer Society TCHPC Early Career Researchers...',
          description: "",
          section: "News",},{id: "news-dr-dong-will-serve-as-a-tpc-member-of-hpdc-24-and-sc-24",
          title: 'Dr.Dong will serve as a TPC member of HPDC’24 and SC’24.',
          description: "",
          section: "News",},{id: "news-our-proposal-an-ai-ml-collaborative-for-southeast-florida-coastal-environmental-data-and-modeling-center-iis-2331908-has-been-funded-by-the-nsf-a-big-thank-you-to-nsf-for-their-support",
          title: 'Our proposal “An AI/ML Collaborative for Southeast Florida Coastal Environmental Data and Modeling...',
          description: "",
          section: "News",},{id: "news-dr-dong-will-serve-as-a-tpc-member-of-sc-24-the-international-conference-for-high-performance-computing-networking-storage-and-analysis-area-of-programming-frameworks-in-atlanta-ga-usa",
          title: 'Dr.Dong will serve as a TPC member of SC’24: The International Conference for...',
          description: "",
          section: "News",},{id: "news-dr-dong-will-serve-as-a-tpc-member-of-hpdc-24-the-33rd-international-symposium-on-high-performance-parallel-and-distributed-computing-is-scheduled-on-june-3-7-2024-and-will-be-held-in-pisa-italy",
          title: 'Dr.Dong will serve as a TPC member of HPDC’24: The 33rd International Symposium...',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-icml-24",
          title: 'One paper was accepted by ICML’24.',
          description: "",
          section: "News",},{id: "news-our-request-for-resources-to-advance-ai-infrastructure-has-been-awarded-by-the-nsf-nairr-pilot-thank-you-to-the-nsf-doe-and-tacc",
          title: 'Our request for resources to advance AI infrastructure has been awarded by the...',
          description: "",
          section: "News",},{id: "news-our-request-for-resources-to-advance-ai-infrastructure-has-been-awarded-by-the-nsf-nairr-pilot-thank-you-to-the-nsf-doe-and-tacc",
          title: 'Our request for resources to advance AI infrastructure has been awarded by the...',
          description: "",
          section: "News",},{id: "news-a-paper-timex-learning-time-series-explanations-with-information-bottleneck-is-accepted-in-icml-24",
          title: 'A paper “TimeX++: Learning Time-Series Explanations with Information Bottleneck” is accepted in ICML’24....',
          description: "",
          section: "News",},{id: "news-nsf-cns-has-awarded-our-application-of-the-student-travel-grant-for-icpp-2024-cns-2422988-this-will-undoubtedly-bring-great-joy-to-the-students",
          title: 'NSF CNS has awarded our application of the student travel grant for ICPP...',
          description: "",
          section: "News",},{id: "news-nsf-oac-has-awarded-our-project-cybertraining-pioneering-a-ci-workforce-for-sustainable-and-transdisciplinary-environmental-science-research-oac-2417849-thanks-nsf",
          title: 'NSF OAC has awarded our project “CyberTraining: Pioneering a CI Workforce for Sustainable...',
          description: "",
          section: "News",},{id: "news-nsf-cns-has-awarded-our-application-for-the-student-travel-grant-for-icpp-2024-cns-2422988-this-will-undoubtedly-bring-great-joy-to-the-students",
          title: 'NSF CNS has awarded our application for the student travel grant for ICPP...',
          description: "",
          section: "News",},{id: "news-nsf-oac-has-awarded-our-project-cybertraining-pioneering-a-ci-workforce-for-sustainable-and-transdisciplinary-environmental-science-research-oac-2417849-thanks-nsf",
          title: 'NSF OAC has awarded our project “CyberTraining: Pioneering a CI Workforce for Sustainable...',
          description: "",
          section: "News",},{id: "news-our-group-moved-to-oregon-state-university",
          title: 'Our group moved to Oregon State University!',
          description: "",
          section: "News",},{id: "news-dr-dong-will-serve-as-a-tpc-member-of-the-ipdps-25",
          title: 'Dr.Dong will serve as a TPC member of the IPDPS’25.',
          description: "",
          section: "News",},{id: "news-dr-dong-will-serve-as-a-tpc-member-of-the-hpdc-25",
          title: 'Dr.Dong will serve as a TPC member of the HPDC’25.',
          description: "",
          section: "News",},{id: "news-dr-dong-will-serve-as-a-publicity-chair-of-the-ics-25-please-check-the-call-for-paper",
          title: 'Dr.Dong will serve as a publicity chair of the ICS’25. Please check the...',
          description: "",
          section: "News",},{id: "news-ics-25-is-running-the-2nd-cycle-for-paper-submission-abstract-ddl-is-february-24-2025-again-the-notification-date-of-ics-25-is-before-the-sc-25-paper-submission",
          title: 'ICS’25 is running the 2nd cycle for paper submission (Abstract DDL is February...',
          description: "",
          section: "News",},{id: "news-a-paper-framework-for-tracking-metadata-lineage-and-model-provenance-in-hybrid-simulation-ai-hpc-exascale-workflows-is-accepted-in-cug-25",
          title: 'A paper “Framework for tracking metadata, lineage and model provenance in hybrid simulation-AI...',
          description: "",
          section: "News",},{id: "news-a-paper-hurricast-synthetic-tropical-cyclone-track-generation-for-hurricane-forecasting-is-accepted-to-the-sss-25-symposium-at-aaai-2025",
          title: 'A paper “HurriCast: Synthetic Tropical Cyclone Track Generation for Hurricane Forecasting” is accepted...',
          description: "",
          section: "News",},{id: "projects-axolotl",
          title: 'Axolotl',
          description: "Object-Aware Remote Memory for HPC Applications",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-loxia",
          title: 'Loxia',
          description: "A Self-Guided System for Optimizing Feature Selection and Model Pruning in Scientific Machine Learning Models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/loxia_project/";
            },},{id: "projects-maeta",
          title: 'MAETA',
          description: "Identifying and Mitigating the Memory Bottleneck in Scientific ML Models through Execution Trace Analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/meata_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
