---
layout: page
title: Quienes somos
subtitle: El equipo
---

<style>
  .person-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Fixed 3 columns */
    gap: 2rem;
    margin-top: 2rem;
  }

  .person-card {
    background: rgba(255, 255, 255, 0.85);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: sans-serif;
  }

  .person-card img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .person-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
  }

  .person-card .role {
    font-weight: bold;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  .person-card .links {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    color: #444;
  }

  .person-card p {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  .person-card .interests {
    font-size: 0.85rem;
    color: #666;
  }

  @media (max-width: 900px) {
    .person-grid {
      overflow-x: auto;
      display: flex;
      gap: 1.5rem;
      padding-bottom: 1rem;
    }

    .person-card {
      min-width: 280px;
      flex-shrink: 0;
    }
  }
</style>

<div class="person-grid">


<div class="person-card">
  <img src="/macrodata/assets/img/cristian-roman-polacios-new.jpg" alt="Cristian Román Palacios">
  <h3>Cristian Román</h3>
  <div class="role">Coordinación general</div>
  <div class="links">
    🌎 <a href="https://datadiversitylab.github.io">Sitio web</a> · 🐦 <a href="https://bsky.app/profile/cromanpa.bsky.social">BlueSky</a>
  </div>
  <p>
    Ecólogo y biólogo evolutivo, actualmente Profesor Asistente en la Universidad de Arizona. Su trabajo combina investigación en biología evolutiva, conservación y ciencia de datos, con un interés particular en desarrollar herramientas bioinformáticas para entender mejor la diversidad biológica.
  </p>
  <div class="interests">`#R` `#filogenia` `#cienciaabierta` `#macroevolución`</div>
</div>

<div class="person-card">
  <img src="/macrodata/assets/img/Kathe.jpg" alt="Katherine Pérez Castillo">
  <h3>Katherine Pérez</h3>
  <div class="role">Logística</div>
  <div class="links">
    🌎 <a href="#">Sitio web</a> · 🐦 <a href="#">BlueSky</a> · 💼 <a href="#">LinkedIn</a>
  </div>
  <p>
    Bióloga con experiencia en investigación y trabajo de campo, con énfasis en análisis de biodiversidad particularmente en aves y ecología animal, asi como en trabajo comunitario y educación ambiental. Katherine ha estado involucrada en iniciativas de conservación y tiene habilidades técnicas en análisis de datos ecológicos usando R.
  </p>
  <div class="interests">`#educación` `#diversidad` `#redesregionales` `#gestióncientífica`</div>
</div>

<div class="person-card">
  <img src="/macrodata/assets/img/Natalia.jpg" alt="Natalia Ramírez">
  <h3>Natalia Ramírez</h3>
  <div class="role">Acompañamiento técnico</div>
  <div class="links">
    🌎 <a href="#">Sitio web</a> · 🐦 <a href="#">BlueSky</a>
  </div>
  <p>
    Bióloga con enfoque en ecología, biogeografía y evolución. Actualmente investiga el efecto de características ecológicas y biogeográficas de los páramos sobre la riqueza de aves en Colombia, utilizando herramientas SIG, R, y otras herramientas de análisis de datos. Natalia ha colaborado en tareas administrativas relacionadas con actividades investigativas.
  </p>
  <div class="interests">`#programación` `#Rstats` `#recursosabiertos` `#pedagogía`</div>
</div>

</div>




