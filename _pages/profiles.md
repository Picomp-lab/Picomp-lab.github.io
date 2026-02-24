---
layout: page
permalink: /People/
title: People
nav: true
---

<style>
.profile-img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: top;
}
</style>

**Principle Investigator**
<br>

<div class="row justify-content-md-center">
    <div class="col-sm-3">
        <img class="img-fluid rounded z-depth-1 profile-img" src="{{ '/assets/img/Wenqian_Dong.jpg' | relative_url }}" alt="" title="Wenqian Dong"/>
    </div>
    <div class="col-sm-4">
        <b>Wenqian Dong</b> <br>
        Assistant Professor (2022 Fall --) <br><br>
        Email: <a href="mailto:wenqian.dong@oregonstate.edu">wenqian.dong@oregonstate.edu</a> <br> 
        <a href="https://scholar.google.com/citations?user=6qIVck4AAAAJ&hl=en">Google scholar</a> <br>
        <a href="https://wdong5.github.io/" target="_blank">Personal Website</a>
    </div>
    <div class="col-sm-5">
       Wenqian Dong is an assistant professor in the School of EECS at <a href="https://engineering.oregonstate.edu/EECS" style="color:#538480;"> Oregon State University </a>. She is the director of Parallel Intelligent Computing (Picomp) Lab.
    </div>  
</div>  
<br>

---

**Ph.D. Students**
<br>

<div class="row justify-content-md-center">
    <div class="col-sm-3">
        <img class="img-fluid rounded z-depth-1 profile-img" src="{{ '/assets/img/Shouwei_gao_cunzhao.jpg' | relative_url }}" alt="" title="Shouwei Gao"/>
    </div>
    <div class="col-sm-4">
        <b>Shouwei Gao</b> <br>
        Ph.D. student (2023 Fall --) <br>
        Email: <a href="mailto:gaosho@oregonstate.edu">gaosho@oregonstate.edu</a> <br> 
    </div>
    <div class="col-sm-5">
        Shouwei's research interests include AI for science, large-scale ML/AI models, and explainable AI.
    </div>  
</div>  
<br>


<div class="row justify-content-md-center">
    <div class="col-sm-3">
        <img class="img-fluid rounded z-depth-1 profile-img" src="{{ '/assets/img/Arunavo.jpg' | relative_url }}" alt="" title="Arunavo Dey"/>
    </div>
    <div class="col-sm-4">
        <b>Arunavo Dey</b> <br>
        Ph.D. student (Fall 2025 --) <br>
        Email: <a href="mailto:deyaru@oregonstate.edu">deyaru@oregonstate.edu</a> <br> 
    </div>
    <div class="col-sm-5">
        Arunavo's research interests include high-performance computing, and system optimization for agentic AI workflow.
    </div>  
</div>  
<br>

<div class="row justify-content-md-center">
    <div class="col-sm-3">
        <img class="img-fluid rounded z-depth-1 profile-img" src="{{ '/assets/img/Changqing.jpg' | relative_url }}" alt="" title="Changqing Li"/>
    </div>
    <div class="col-sm-4">
        <b>Changqing Li</b> <br>
        Ph.D. student (2025 Fall --) <br>
        Email: <a href="mailto:lic24@oregonstate.edu">lic24@oregonstate.edu</a> <br> 
    </div>
    <div class="col-sm-5">
        Changqing's research interests include AI accelerators and system optimization for LLMs.
    </div>  
</div>  
<br>
<br clear="left"/>

<div class="row justify-content-md-center">
    <div class="col-sm-3">
        <img class="img-fluid rounded z-depth-1 profile-img" src="{{ '/assets/img/Chelsi.jpg' | relative_url }}" alt="" title="Chelsi Chain "/>
    </div>
    <div class="col-sm-4">
        <b>Chelsi Jain</b> <br>
        Master student (Summer 2025 --) <br>
        Email: <a href="mailto:jainc@oregonstate.edu">jainc@oregonstate.edu</a> <br> 
    </div>
    <div class="col-sm-5">
        Chelsi's research interests include system optimization of RAG and AI agent.
    </div>  
</div>  
<br>
<br clear="left"/>

---

**Undergraduate Students**

- <a href="https://www.linkedin.com/in/jiyapradhan/" target="_blank">Jiya Pradhan</a><br>
- <a href="https://www.linkedin.com/in/wade-owojori/" target="_blank">Ayowade (Wade) Owojori</a>

---

**Research Intern**

- Shanlin Liu
- Caichen Deng

---

**Alumni**

- Haoyu Zheng
- Meiyan Gao First employment: Neocis Inc.

<div class="people">

{% for y in page.roles %}

  <h2 class="roles">{{role}}</h2>
  {% bibliography -f papers -q @*[roles={{y}}]* %}
{% endfor %}

</div>
