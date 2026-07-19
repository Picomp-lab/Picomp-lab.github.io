---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 5
---

<div class="publication-explorer" data-publication-explorer>
  <div class="publication-filters" aria-label="Publication filters">
    <label class="publication-search">
      <span class="sr-only">Search publications</span>
      <i class="ti ti-search" aria-hidden="true"></i>
      <input type="search" data-publication-search placeholder="Search publications by title, author, or venue..." autocomplete="off">
    </label>
    <div class="publication-selects">
      <label>
        <span>Year</span>
        <select data-publication-year>
          <option value="all">All Years</option>
        </select>
      </label>
      <label>
        <span>Topic</span>
        <select data-publication-topic>
          <option value="all">All Topics</option>
        </select>
      </label>
    </div>
  </div>

  <p class="publication-empty" data-publication-empty hidden>No publications found with the selected filters.</p>

  <div class="publication-year-groups" data-publication-results>
    <article class="publication-card" data-year="2026" data-topics="AI for Science|Machine Learning Systems">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/reliable-surrogates.svg' | relative_url }}" alt="Reliable machine-learning surrogate workflow" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>Towards Building Reliable Machine Learning Surrogates for Scientific Applications</h3></div>
      <p class="publication-authors">Bohan Zhang, Wenqian Dong, Guanpeng Li</p>
      <p class="publication-venue"><strong>IEEE Cloud Summit 2026</strong></p>
      <div class="publication-tags"><span>AI for Science</span><span>Machine Learning Systems</span></div>
      <div class="publication-links"><a href="https://www.ieeecloudsummit.org/">Conference</a></div>
    </article>

    <article class="publication-card" data-year="2026" data-topics="LLM Systems|Machine Learning Systems">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/flying-serving.webp' | relative_url }}" alt="Flying Serving system overview" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>FLYING SERVING: On-the-Fly Parallelism Switching for Large Language Model Serving</h3><span class="publication-award"><i class="ti ti-award" aria-hidden="true"></i> Best Paper Award nominee</span></div>
      <p class="publication-authors">Shouwei Gao, Junqi Yin, Feiyi Wang, Wenqian Dong</p>
      <p class="publication-venue"><strong>ACM International Conference on Supercomputing (ICS'26)</strong></p>
      <div class="publication-tags"><span>LLM Systems</span><span>Machine Learning Systems</span></div>
      <div class="publication-links"><a href="https://arxiv.org/pdf/2602.22593">Paper</a></div>
    </article>

    <article class="publication-card" data-year="2026" data-topics="AI for Science|Scientific Machine Learning">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/lumos.webp' | relative_url }}" alt="LUMOS scientific machine-learning workflow" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>LUMOS: Democratizing SciML Workflows with L0-Regularized Learning for Unified Feature and Parameter Adaptation</h3></div>
      <p class="publication-authors">Shouwei Gao, Xu Zheng, Dongsheng Luo, Sheng Di, Wenqian Dong</p>
      <p class="publication-venue"><strong>IEEE International Parallel &amp; Distributed Processing Symposium (IPDPS'26)</strong></p>
      <div class="publication-tags"><span>AI for Science</span><span>Scientific Machine Learning</span></div>
      <div class="publication-links"><a href="https://arxiv.org/pdf/2602.22537v1">Paper</a><a href="{{ '/slides/publication/LUMOS_ Democratizing SciML Workflows with L0-Regularized Learning for Unified Feature and Parameter Adaptation (1).pdf' | relative_url }}">Slides</a><a href="https://github.com/Picomp-lab/LUMOS-IPDPS26">Code</a></div>
    </article>

    <article class="publication-card" data-year="2026" data-topics="High-Performance Computing|LLM Systems">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/llm-coding-agents.jpg' | relative_url }}" alt="Evaluation of HPC coding agents" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>Evaluating LLM Coding Agents on SZ-Family Lossy Compression Across Architectures</h3></div>
      <p class="publication-authors">Changqing Li, Shouwei Gao, Kai Zhao, Sheng Di, Wenqian Dong</p>
      <p class="publication-venue"><strong>IPDPS HPAI4S'26 Workshop</strong><small>IEEE IPDPS Workshops</small></p>
      <div class="publication-tags"><span>High-Performance Computing</span><span>LLM Systems</span></div>
      <div class="publication-links"><a href="{{ '/slides/publication/ShengDi_HPAI4S_IPDPS26.pdf' | relative_url }}">Slides</a></div>
    </article>

    <article class="publication-card" data-year="2025" data-topics="AI Accelerators|Machine Learning Systems">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/phoenix.jpg' | relative_url }}" alt="Phoenix wafer-scale engine architecture" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>Enabling Unstructured Sparse Fine-Tuning and Inference for Foundation Models on Wafer-Scale Engine</h3></div>
      <p class="publication-authors">Haoyu Zheng, Yifan Zeng, Linghao Song, Murali Emani, Wenqian Dong</p>
      <p class="publication-venue"><strong>SC'25 ExHetAI Workshop</strong></p>
      <div class="publication-tags"><span>AI Accelerators</span><span>Machine Learning Systems</span></div>
      <div class="publication-links"><a href="https://dl.acm.org/doi/10.1145/3731599.3767395">Paper</a><a href="{{ '/slides/publication/Phoenix%20-%20SC%2725.pdf' | relative_url }}">Slides</a><a href="https://github.com/Picomp-lab/Phoenix">Code</a></div>
    </article>

    <article class="publication-card" data-year="2025" data-topics="AI for Science|Generative AI">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/hurricast.jpg' | relative_url }}" alt="HurriCast tropical cyclone generation poster" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>HurriCast: Synthetic Tropical Cyclone Track Generation for Hurricane Forecasting</h3></div>
      <p class="publication-authors">Shouwei Gao, Meiyan Gao, Yuepeng Li, Wenqian Dong</p>
      <p class="publication-venue"><strong>AAAI 2025 Spring Symposium Series</strong></p>
      <div class="publication-tags"><span>AI for Science</span><span>Generative AI</span></div>
      <div class="publication-links"><a href="https://ojs.aaai.org/index.php/AAAI-SS/article/view/35581">Paper</a><a href="https://github.com/Picomp-lab/Hurricast/blob/main/HurriCast%20Slides.pdf">Slides</a><a href="https://github.com/Picomp-lab/Hurricast?tab=readme-ov-file">Code</a></div>
    </article>

    <article class="publication-card" data-year="2025" data-topics="AI for Science|High-Performance Computing">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/metadata-lineage.jpg' | relative_url }}" alt="Hybrid simulation and AI metadata workflow" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>Framework for tracking metadata, lineage and model provenance in hybrid simulation-AI HPC exascale workflows</h3></div>
      <p class="publication-authors">Martin Foltin, Andrew Shao, Rishabh Sharma, Shreyas Kulkarni, Annmary Justine Koomthanam, Aalap Tripathy, Cong Xu, Wenqian Dong, Suparna Bhattacharya, Brian Sammuli, Paolo Faraboschi</p>
      <p class="publication-venue"><strong>CUG'25: Proceedings of the Cray User Group</strong></p>
      <div class="publication-tags"><span>AI for Science</span><span>High-Performance Computing</span></div>
      <div class="publication-links"><a href="https://dl.acm.org/doi/10.1145/3757348.3757364">Paper</a></div>
    </article>

    <article class="publication-card" data-year="2024" data-topics="Explainable AI|Time Series">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/timex.webp' | relative_url }}" alt="TimeX++ time-series explanation framework" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>TimeX++: Learning Time-Series Explanations with Information Bottleneck</h3></div>
      <p class="publication-authors">Zichuan Liu, Tianchun Wang, Jimeng Shi, Xu Zheng, Zhuomin Chen, Lei Song, Wenqian Dong, Jayantha Obeysekera, Farhad Shirani, Dongsheng Luo</p>
      <p class="publication-venue"><strong>41st International Conference on Machine Learning (ICML'24)</strong></p>
      <div class="publication-tags"><span>Explainable AI</span><span>Time Series</span></div>
      <div class="publication-links"><a href="https://dl.acm.org/doi/10.5555/3692070.3693367">Paper</a></div>
    </article>

    <article class="publication-card" data-year="2023" data-topics="AI for Science|High-Performance Computing">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/auto-hpcnet.webp' | relative_url }}" alt="Auto-HPCnet framework" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>Auto-HPCnet: An Automatic Framework to Build Neural Network-based Surrogate Models for HPC Applications</h3></div>
      <p class="publication-authors">Wenqian Dong, Gokcen Kestor, Dong Li</p>
      <p class="publication-venue"><strong>ACM International Symposium on High-Performance Parallel and Distributed Computing (HPDC'23)</strong></p>
      <div class="publication-tags"><span>AI for Science</span><span>High-Performance Computing</span></div>
      <div class="publication-links"><a href="https://dl.acm.org/doi/10.1145/3588195.3592985">Paper</a></div>
    </article>

    <article class="publication-card" data-year="2023" data-topics="Graph Neural Networks|Machine Learning Systems">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/betty.webp' | relative_url }}" alt="Betty graph partitioning system" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>Betty: Enabling Large-Scale GNN Training with Batch-Level Graph Partitioning</h3></div>
      <p class="publication-authors">Shuangyan Yang, Minjia Zhang, Wenqian Dong, Dong Li</p>
      <p class="publication-venue"><strong>International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS'23)</strong></p>
      <div class="publication-tags"><span>Graph Neural Networks</span><span>Machine Learning Systems</span></div>
      <div class="publication-links"><a href="https://dl.acm.org/doi/10.1145/3575693.3575725">Paper</a></div>
    </article>

    <article class="publication-card" data-year="2021" data-topics="Database Systems|Machine Learning">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/fauce.webp' | relative_url }}" alt="Fauce cardinality-estimation method" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>Fauce: Fast and Accurate Deep Ensembles with Uncertainty for Cardinality Estimation</h3></div>
      <p class="publication-authors">Jie Liu, Wenqian Dong, Qingqing Zhou, Dong Li</p>
      <p class="publication-venue"><strong>International Conference on Very Large Data Bases (VLDB'21)</strong></p>
      <div class="publication-tags"><span>Database Systems</span><span>Machine Learning</span></div>
      <div class="publication-links"><a href="https://vldb.org/pvldb/vol14/p1950-liu.pdf">Paper</a></div>
    </article>

    <article class="publication-card" data-year="2021" data-topics="High-Performance Computing|Scientific Computing">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/md-hm.webp' | relative_url }}" alt="MD-HM molecular dynamics system" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>MD-HM: Memoization-based Molecular Dynamics Simulations on Big Memory System</h3></div>
      <p class="publication-authors">Zhen Xie, Wenqian Dong, Jie Liu, Ivy Peng, Yanbao Ma, Dong Li</p>
      <p class="publication-venue"><strong>ACM International Conference on Supercomputing (ICS'21)</strong></p>
      <div class="publication-tags"><span>High-Performance Computing</span><span>Scientific Computing</span></div>
      <div class="publication-links"><a href="https://dl.acm.org/doi/10.1145/3447818.3460365">Paper</a></div>
    </article>

    <article class="publication-card" data-year="2021" data-topics="GPU Computing|Machine Learning Systems">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/tahoe.webp' | relative_url }}" alt="Tahoe GPU inference engine" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>Tahoe: Tree Structure-Aware High Performance Inference Engine for Decision Tree Ensemble on GPU</h3></div>
      <p class="publication-authors">Zhen Xie, Wenqian Dong, Jiawen Liu, Hang Liu, Dong Li</p>
      <p class="publication-venue"><strong>ACM European Conference on Computer Systems (EuroSys'21)</strong></p>
      <div class="publication-tags"><span>GPU Computing</span><span>Machine Learning Systems</span></div>
      <div class="publication-links"><a href="https://dl.acm.org/doi/abs/10.1145/3447786.3456251">Paper</a></div>
    </article>

    <article class="publication-card" data-year="2020" data-topics="AI for Science|High-Performance Computing">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/smart-pgsim.webp' | relative_url }}" alt="Smart-PGSim power-grid simulation workflow" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>Smart-PGSim: Using Neural Network to Accelerate AC-OPF Power Grid Simulation</h3></div>
      <p class="publication-authors">Wenqian Dong, Zhen Xie, Gokcen Kestor, Dong Li</p>
      <p class="publication-venue"><strong>ACM/IEEE International Conference for High Performance Computing (SC'20)</strong></p>
      <div class="publication-tags"><span>AI for Science</span><span>High-Performance Computing</span></div>
      <div class="publication-links"><a href="https://ieeexplore.ieee.org/abstract/document/9355288">Paper</a></div>
    </article>

    <article class="publication-card" data-year="2019" data-topics="AI for Science|High-Performance Computing">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/adaptive-neural-network.webp' | relative_url }}" alt="Adaptive neural-network fluid simulation" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>Adaptive Neural Network-Based Approximation to Accelerate Eulerian Fluid Simulation</h3></div>
      <p class="publication-authors">Wenqian Dong, Jie Liu, Zhen Xie, Dong Li</p>
      <p class="publication-venue"><strong>ACM/IEEE International Conference for High Performance Computing (SC'19)</strong></p>
      <div class="publication-tags"><span>AI for Science</span><span>High-Performance Computing</span></div>
      <div class="publication-links"><a href="https://dl.acm.org/doi/10.1145/3295500.3356147">Paper</a></div>
    </article>

    <article class="publication-card" data-year="2018" data-topics="High-Performance Computing|Resilience">
      <figure class="publication-teaser"><img src="{{ '/assets/img/publications/application-resilience.svg' | relative_url }}" alt="Application resilience model" loading="lazy"></figure>
      <div class="publication-card-heading"><h3>Modeling Application Resilience in Large Scale Parallel Execution</h3></div>
      <p class="publication-authors">Kai Wu, Wenqian Dong, Qiang Guan, Nathan DeBardeleben, Dong Li</p>
      <p class="publication-venue"><strong>International Conference on Parallel Processing (ICPP'18)</strong></p>
      <div class="publication-tags"><span>High-Performance Computing</span><span>Resilience</span></div>
      <div class="publication-links"><a href="https://dl.acm.org/doi/10.1145/3225058.3225119">Paper</a></div>
    </article>
  </div>
</div>

<script defer src="{{ '/assets/js/publications.js' | relative_url }}"></script>
