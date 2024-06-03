<script setup>
import {ref} from 'vue'
let num = ref(0)
</script>

<template>
  <header> 
      <div class="header" id="header">
        <div class="logo_header">
          <img src="https://fulltime.com.br/wp-content/themes/fulltime-brasil-1/images/logo.png"  class="logo_ft" alt="FullTime ">
        </div>
          <div class="navigation_header">
            <a href="#" class="ativo"> Home </a>
            <a href="#" class="ativo"> Sobre Nós </a>
            <a href="#" class="ativo"> Blog </a>
            <a href="#" class="ativo"> Soluções </a>
            <a href="#" class="ativo"> Fale Conosco </a>
            <a href="#" class="ativo"> Agenda </a>
            <a href="#" class="ativo"> FAQ </a>
          </div>
      </div>
  </header> 
               <!-- CHATBOT -->
    <div class = "main-div">
      <!-- <div class="menuToggle">
        <i class='bx bx-chat' ></i>
      </div> -->
      <div class="container"> 
        <div class="top-part">  
          <div class ="agent-details">  
            <img src="https://cdn-icons-png.flaticon.com/512/3662/3662817.png"  alt="">
            <div class="agent-text">
              <h3 id="nickname">SAC Inteligente</h3>
              <p> ChatBot <span>(Online)</span></p>
            </div>
          </div>
        </div>
        <div class="chart-section">
          <div class="left-part">
            <div class="agent-chart">
              <img src="https://cdn-icons-png.flaticon.com/512/3662/3662817.png" alt="">
              <p>Olá, qual seria a dúvida?</p>
            </div>
          </div>
          <div class="right-part">  
            <p>Olá</p>
          </div>
        </div>  
        <div class="chart-section">
          <div class="left-part">
            <div class="agent-chart">
              <img src="https://cdn-icons-png.flaticon.com/512/3662/3662817.png" alt="">
              <p>Qual sua dúvida para que eu possa lhe fornecer o suporte necessário? </p>
            </div>
          </div>
          <div class="right-part">  
            <p>...</p>
          </div>
        </div>  
        <div class="bottom-section">
          <textarea name="" id="" cols="30" rows="10" placeholder="Digite a mensagem."></textarea>
          <button id="send" class="btn"><i class='bx bx-send'></i></button>
        </div>
      </div>
    </div>
</template>