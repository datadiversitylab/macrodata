---
layout: page
title: Proyecto final
subtitle: ¿La altitud predice la masa corporal en los colibríes?
cover-img: "/assets/img/Tree_of_Angiosperm_Phylogeny_2024.jpg"
---

<style>
  .pf-intro {
    font-size: 1.12rem;
    line-height: 1.8;
    color: #444;
    max-width: 680px;
    margin: 0 auto 2.5rem;
    text-align: center;
  }

  .pf-steps {
    counter-reset: pf-counter;
    list-style: none;
    padding: 0;
    margin: 0 0 3rem;
  }

  .pf-steps li {
    counter-increment: pf-counter;
    display: flex;
    gap: 1.25rem;
    margin-bottom: 1.75rem;
    align-items: flex-start;
  }

  .pf-steps li::before {
    content: counter(pf-counter);
    background: #0085A1;
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    min-width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 0.1rem;
  }

  .pf-steps li strong {
    display: block;
    margin-bottom: 0.25rem;
    color: #222;
  }

  .pf-steps li p {
    margin: 0;
    color: #555;
    font-size: 0.96rem;
    line-height: 1.65;
  }

  .pf-outputs {
    background: linear-gradient(135deg, #f0f9fb 0%, #e3f4f7 100%);
    border-radius: 14px;
    padding: 2rem 2.25rem;
    margin-bottom: 2.5rem;
  }

  .pf-outputs h3 {
    font-size: 1.05rem;
    color: #0085A1;
    margin-top: 0;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: 0.82rem;
  }

  .pf-outputs ul {
    margin: 0;
    padding-left: 1.25rem;
    color: #444;
    font-size: 0.96rem;
    line-height: 1.75;
  }

  .pf-why {
    border-left: 4px solid #0085A1;
    padding: 1.25rem 1.5rem;
    margin-bottom: 2.5rem;
    background: #fff;
    border-radius: 0 10px 10px 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  }

  .pf-why p {
    margin: 0;
    color: #444;
    line-height: 1.75;
    font-size: 0.97rem;
  }

  .pf-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-bottom: 2.5rem;
  }

  .pf-tag {
    background: rgba(0,133,161,0.09);
    color: #0085A1;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.83rem;
    font-weight: 500;
    border: 1px solid rgba(0,133,161,0.22);
  }

  .pf-cta {
    text-align: center;
    padding: 2rem 1rem;
    border-top: 1px solid #eee;
    margin-top: 1rem;
  }

  .pf-cta p {
    color: #777;
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  .btn-pf {
    display: inline-block;
    background: #0085A1;
    color: #fff !important;
    padding: 0.7rem 2rem;
    border-radius: 8px;
    text-decoration: none !important;
    font-weight: 600;
    font-size: 0.92rem;
    transition: background 0.2s ease;
    margin: 0.25rem;
  }

  .btn-pf:hover { background: #006d85; color: #fff !important; }

  .btn-pf.secondary {
    background: transparent;
    border: 2px solid #0085A1;
    color: #0085A1 !important;
  }

  .btn-pf.secondary:hover {
    background: rgba(0,133,161,0.08);
  }

  @media (max-width: 600px) {
    .pf-outputs { padding: 1.5rem 1.25rem; }
    .pf-steps li { flex-direction: column; gap: 0.5rem; }
  }
</style>

<p class="pf-intro">
  Mismos datos, distintos análisis. Cada equipo toma sus propias decisiones analíticas
  y el conjunto de resultados es el estudio. Tu análisis no es un ejercicio: es un dato.
</p>

---

## Lo que estamos midiendo no es la respuesta

Cada equipo decide cómo analizar los datos: qué árbol filogenético usar, qué hacer con las especies sin información completa, cómo resumir un rango de altitud en un solo número, qué modelo ajustar. Todas esas decisiones son defendibles y todas pueden cambiar el resultado. Lo que vamos a revisar es cuánto se mueve la conclusión según esas decisiones.

Esto ya se hizo en psicología y en ecología. Gould et al. (2025) reunió 174 equipos para responder dos preguntas con los mismos datos y encontraron resultados muy distintos entre ellos. Lo más incómodo de ese trabajo fue que los análisis más alejados del promedio no recibieron peores evaluaciones de los revisores. No hay una señal fácil que separe el análisis bueno del malo. En métodos comparativos filogenéticos nadie lo ha hecho todavía, y aquí los grados de libertad son mayores.

<div class="pf-why">
  <p>
    Si le preguntas a un monitor si usar lambda o browniano, te va a devolver la pregunta.
    No es que no sepa. Es que tu decisión es el objeto del estudio. Tu trabajo es tomar
    decisiones que puedas defender y escribir por qué las tomaste, mientras las tomas, no al final.
  </p>
</div>

---

## Lo que entregas

<ol class="pf-steps">
  <li>
    <div>
      <strong><code>analisis.R</code></strong>
      <p>Tu análisis completo. Debe correr de principio a fin en una sesión limpia, en otro computador.</p>
    </div>
  </li>
  <li>
    <div>
      <strong><code>decisiones.csv</code></strong>
      <p>Una fila por decisión: qué decidiste, qué alternativas consideraste, por qué, y si lo decidiste antes o después de ver el resultado.</p>
    </div>
  </li>
  <li>
    <div>
      <strong><code>resultados.csv</code></strong>
      <p>Una fila con el estimado, su error, el intervalo, el valor p, el tamaño de muestra y el modelo.</p>
    </div>
  </li>
  <li>
    <div>
      <strong><code>README.md</code></strong>
      <p>Quiénes son, de dónde vienen, qué hicieron en tres frases y qué les quedó pendiente.</p>
    </div>
  </li>
</ol>

---

## La autoría

<div class="pf-outputs">
  <h3>Eres autor si cumples las tres condiciones</h3>
  <ul>
    <li>Entregas tu análisis completo con su formulario de decisiones.</li>
    <li>Revisas y apruebas el borrador final del manuscrito.</li>
    <li>Respondes dentro del plazo cuando te pidamos la aprobación.</li>
  </ul>
</div>

Quien cumpla algunas pero no todas queda en los agradecimientos. El orden es alfabético después de los primeros nombres, con una nota explicando el criterio. No tienes que participar en el manuscrito aun si estás en el taller.

<div class="pf-tags">
  <span class="pf-tag">Colibríes</span>
  <span class="pf-tag">Altitud · masa corporal</span>
  <span class="pf-tag">Métodos comparativos</span>
  <span class="pf-tag">Multiverse analysis</span>
  <span class="pf-tag">Decisiones analíticas</span>
  <span class="pf-tag">Ciencia abierta</span>
  <span class="pf-tag">R</span>
</div>

---

## Publicaciones

Esta sección se actualizará a medida que el manuscrito avance. El estudio de referencia para el diseño del proyecto es:

Gould, E., et al. (2025). Same data, different analysts: variation in effect sizes due to analytical decisions in ecology and evolutionary biology. *BMC Biology*, 23(1), 35.

<div class="pf-cta">
  <p>¿Quieres ser parte del próximo proyecto?</p>
  <a href="{{ '/aplicaciones' | absolute_url }}" class="btn-pf">Aplicar al taller</a>
  <a href="{{ '/contenidos' | absolute_url }}" class="btn-pf secondary">Ver los contenidos</a>
</div>