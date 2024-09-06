import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-my-conquests',
  templateUrl: './my-conquests.component.html',
  styleUrls: ['./my-conquests.component.scss']
})
export class MyConquestsComponent {

  achievements = [
    { title: 'Desenvolvimento de Soluções Inovadoras no Setor Financeiro', description: 'Criação de soluções para otimizar operações de crédito e renda fixa, melhorando a eficiência operacional de instituições financeiras.' },
    { title: 'Especialista em Frameworks Front-End Modernos', description: 'Domínio de Angular, React e Next.js para criar interfaces responsivas e dinâmicas, com foco em performance e UX.' },
    { title: 'Implementação de Integrações Complexas com APIs RESTful', description: 'Desenvolvimento de sistemas robustos com autenticação JWT para garantir a segurança de dados em plataformas críticas.' },
    { title: 'Liderança em Projetos de Controle de Estoque e Gestão de Vendas', description: 'Criação de sistemas de controle de estoque e vendas para pequenos lojistas, oferecendo soluções escaláveis e acessíveis.' },
    { title: 'Utilização de Angular Material para Interfaces Modernas', description: 'Implementação de padrões avançados de design com Angular Material, resultando em interfaces funcionais e visualmente atraentes.' },
    { title: 'Automatização de Processos e Melhoria Operacional', description: 'Aplicação de metodologias Lean Six Sigma para otimizar fluxos operacionais e reduzir custos em empresas financeiras.' },
    { title: 'Autenticação de APIs com JWT', description: 'Implementação de autenticação segura com JWT, garantindo proteção de dados e eficiência em plataformas web.' },
    { title: 'Criação de Sistema de Controle de Biblioteca Comunitária', description: 'Desenvolvimento de sistema para controle de acervo e empréstimo de livros para biblioteca comunitária, auxiliando a comunidade local.' },
    { title: 'Gestão de Projetos com Metodologias Ágeis', description: 'Experiência com metodologias Scrum para entregar projetos de forma rápida e eficiente, garantindo melhorias contínuas.' },
    { title: 'Integração de Layouts Responsivos e Interativos', description: 'Criação de layouts responsivos para melhorar a acessibilidade e experiência do usuário em diferentes dispositivos.' }
  ];

  gridCols: number = 3;
  gutterSize: string = '16px';

  ngOnInit() {
    this.calculateGridCols(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.calculateGridCols(event.target.innerWidth);
  }

  calculateGridCols(width: number) {
    if (width <= 600) {
      this.gridCols = 1;
      this.gutterSize = '8px';
    } else if (width <= 960) {
      this.gridCols = 2;
      this.gutterSize = '12px';
    } else {
      this.gridCols = 3;
      this.gutterSize = '16px';
    }
  }

}
