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
            window.location.href = "/join%20us/";
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
            },},{id: "news-the-picomp-lab-has-been-lauched-in-florida-internationl-university-at-miami-fl",
          title: 'The Picomp lab has been lauched in Florida Internationl University at Miami, FL....',
          description: "",
          section: "News",},{id: "news-a-paper-betty-enabling-large-scale-gnn-training-with-batch-level-graph-partitioning-is-accepted-by-asplos-23",
          title: 'A paper “Betty: Enabling Large-Scale GNN Training with Batch-Level Graph Partitioning” is accepted...',
          description: "",
          section: "News",},{id: "news-dr-dong-was-invited-as-a-panelsit-for-nsf-proposal-review",
          title: 'Dr.Dong was invited as a panelsit for NSF proposal review.',
          description: "",
          section: "News",},{id: "news-a-paper-auto-hpcnet-an-automatic-framework-to-build-neural-network-based-surrogate-models-for-hpc-applications-is-accepted-in-hpdc-23",
          title: 'A paper “Auto-HPCnet: An Automatic Framework to Build Neural Network-based Surrogate Models for...',
          description: "",
          section: "News",},{id: "news-a-phd-student-shouwei-gao-joined-picomp-lab",
          title: 'A PhD student Shouwei Gao joined Picomp Lab.',
          description: "",
          section: "News",},{id: "news-dr-dong-will-serve-as-a-tpc-member-of-sdm-24-and-ccgrid-24",
          title: 'Dr.Dong will serve as a TPC member of SDM’24 and CCGrid’24.',
          description: "",
          section: "News",},{id: "news-dr-dong-was-invited-as-a-panelsit-for-doe-proposal-review",
          title: 'Dr.Dong was invited as a panelsit for DOE proposal review.',
          description: "",
          section: "News",},{id: "news-dr-dong-will-serve-as-a-student-program-co-chair-of-international-conference-on-parallel-processing-icpp-24",
          title: 'Dr.Dong will serve as a Student Program Co-Chair of International Conference on Parallel...',
          description: "",
          section: "News",},{id: "news-dr-dong-was-selected-for-the-2023-ieee-computer-society-tchpc-early-career-researchers-award-for-excellence-in-high-performance-computing-the-award-ceremony-will-be-at-sc23-in-denver",
          title: 'Dr.Dong was selected for the 2023 IEEE Computer Society TCHPC Early Career Researchers...',
          description: "",
          section: "News",},{id: "news-dr-dong-will-serve-as-a-tpc-member-of-hpdc-24-and-sc-24",
          title: 'Dr.Dong will serve as a TPC member of HPDC’24 and SC’24.',
          description: "",
          section: "News",},{id: "news-a-paper-timex-learning-time-series-explanations-with-information-bottleneck-was-accepted-by-icml-24",
          title: 'A paper “TimeX++: Learning Time-Series Explanations with Information Bottleneck” was accepted by ICML’24....',
          description: "",
          section: "News",},{id: "news-our-request-for-resources-to-advance-ai-infrastructure-has-been-awarded-by-the-nsf-nairr-pilot",
          title: 'Our request for resources to advance AI infrastructure has been awarded by the...',
          description: "",
          section: "News",},{id: "news-a-paper-timex-learning-time-series-explanations-with-information-bottleneck-is-accepted-in-icml-24",
          title: 'A paper “TimeX++: Learning Time-Series Explanations with Information Bottleneck” is accepted in ICML’24....',
          description: "",
          section: "News",},{id: "news-nsf-oac-has-awarded-our-project-cybertraining-pioneering-a-ci-workforce-for-sustainable-and-transdisciplinary-environmental-science-research-oac-2417849",
          title: 'NSF OAC has awarded our project “CyberTraining: Pioneering a CI Workforce for Sustainable...',
          description: "",
          section: "News",},{id: "news-our-group-moved-to-oregon-state-university",
          title: 'Our group moved to Oregon State University!',
          description: "",
          section: "News",},{id: "news-a-paper-framework-for-tracking-metadata-lineage-and-model-provenance-in-hybrid-simulation-ai-hpc-exascale-workflows-is-accepted-in-cug-25",
          title: 'A paper “Framework for tracking metadata, lineage and model provenance in hybrid simulation-AI...',
          description: "",
          section: "News",},{id: "news-a-paper-hurricast-synthetic-tropical-cyclone-track-generation-for-hurricane-forecasting-is-accepted-to-the-sss-25-symposium-at-aaai-2025",
          title: 'A paper “HurriCast: Synthetic Tropical Cyclone Track Generation for Hurricane Forecasting” is accepted...',
          description: "",
          section: "News",},{id: "news-nsf-oac-has-awarded-our-project-oac-core-ai-surrogate-enhanced-heterogeneous-acceleration-for-large-scale-power-grid-simulation-oac-2505118-thanks-nsf",
          title: 'NSF OAC has awarded our project “OAC Core: AI-Surrogate Enhanced Heterogeneous Acceleration for...',
          description: "",
          section: "News",},{id: "news-a-paper-phoenix-enabling-unstructured-sparse-fine-tuning-and-inference-for-foundation-models-on-wafer-scale-engine-is-accepted-in-sc-25-exhetai-workshop",
          title: 'A paper “Phoenix: Enabling Unstructured Sparse Fine-Tuning and Inference for Foundation Models on...',
          description: "",
          section: "News",},{id: "news-two-ph-d-students-arunavo-dey-and-changqing-li-are-joining-us-this-fall",
          title: 'Two Ph.D. students, Arunavo Dey and Changqing Li, are joining us this fall!...',
          description: "",
          section: "News",},{id: "news-a-paper-lumos-democratizing-sciml-workflows-with-l0-regularized-learning-for-unified-feature-and-parameter-adaptation-is-accepted-in-ipdps-26",
          title: 'A paper “LUMOS: Democratizing SciML Workflows with L0-Regularized Learning for Unified Feature and...',
          description: "",
          section: "News",},{id: "news-a-paper-flying-serving-on-the-fly-parallelism-switching-for-large-language-model-serving-is-accepted-in-acm-international-conference-on-supercomputing-ics-26",
          title: 'A paper “FLYING SERVING: On-the-Fly Parallelism Switching for Large Language Model Serving” is...',
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
