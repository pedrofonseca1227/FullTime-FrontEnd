<script setup>
import {ref} from 'vue'

let num = ref(0)

</script>
<template>
<head> 
    <div class="header" id="header">
      <div class="logo_header">
        <img src="https://fulltime.com.br/wp-content/themes/fulltime-brasil-1/images/logo.png"  class="logo_ft" alt="FullTime ">
      </div>
        <div class="navigation_header">
          <a href="#" class="active"> Home </a>
          <a href="#" class="active"> Sobre Nós </a>
          <a href="#" class="active"> Blog </a>
          <a href="#" class="active"> Soluções </a>
          <a href="#" class="active"> Fale Conosco </a>
          <a href="#" class="active"> Agenda </a>
          <a href="#" class="active"> FAQ </a>
        </div>
    </div>
</head> 
               <!-- CHATBOT -->
      <div class = "main-div">
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
        <button id="send" class="btn"><i class='bx bxs-send'></i></button>
      </div>
    </div>
  </div>
</template>
  