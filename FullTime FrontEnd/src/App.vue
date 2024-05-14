<script setup>
import {ref} from 'vue'

let num = ref(0)

</script>
<template>
<head> 
    <div class="header" id="header">
      <div class="logo_header">
        <img src="https://fulltime.com.br/wp-content/themes/fulltime-brasil-1/images/logo.png "  class="logo_ft" alt="FullTime ">
      </div>
        <div class="navigation_header">
          <a href="#" class="active">&nbsp Home &nbsp</a>
          <a href="#" class="active">&nbsp Sobre Nós &nbsp</a>
          <a href="#" class="active">&nbsp Blog &nbsp</a>
          <a href="#" class="active">&nbsp Soluções &nbsp</a>
          <a href="#" class="active">&nbsp Fale Conosco &nbsp</a>
          <a href="#" class="active">&nbsp Agenda &nbsp</a>
          <a href="#" class="active">&nbsp FAQ &nbsp</a>
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
              <h3>&nbsp Chatbot</h3>
              <p>&nbsp Agente <span>(Online)</span></p>
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
              <span>Agora</span>
             </div>
            </div>  
          <div class="bottom-section">
        <textarea name="" id="" cols="30" rows="10" placeholder="Digite a mensagem."></textarea>
      </div>
    </div>
  </div>
</template>
  