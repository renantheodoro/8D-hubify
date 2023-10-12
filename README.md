# 8D Hubify - Projeto de Apresentação de Cases

Este é um projeto de site desenvolvido para apresentação de cases da empresa 8D Hubify em um evento. O site foi construído com HTML5, SCSS (Sass), e JavaScript puro.

- **Empresa Desenvolvedora**: Crew
- **Proporção de Tela**: 1920x1080

## Como executar o projeto
Para visualizar o projeto localmente, basta abrir o arquivo index.html que se encontra na raíz dos arquivos em um navegador da web(preferencialmente no Chrome).

### Testar o projeto na simulação de mobile
Abra o projeto no Google Chrome.

Para "Inspecionar Elemento", existem várias maneiras:

1. Pressione Ctrl + Shift + I (ou Cmd + Option + I no Mac) no teclado.
2. Clique com o botão direito em qualquer parte do projeto e selecione "Inspecionar" no menu de contexto.
3. Clique no ícone "Toggle Device Toolbar" ou pressione Ctrl + Shift + M (ou Cmd + Option + M no Mac) para ativar o modo de inspeção de dispositivos móveis.

No canto superior esquerdo, você pode selecionar o dispositivo que deseja emular (por exemplo, "Responsive" para definir manualmente as dimensões).

Ajuste as dimensões para 1920x1080 (largura x altura) para garantir que as proporções estejam corretas.

Agora você pode visualizar o projeto em uma resolução de 1920x1080 para garantir que o layout esteja adequado para esse tamanho de tela.

## Informações Técnicas

### Compilação do SCSS em CSS

Para compilar o código SCSS em CSS, utilize o seguinte comando na raiz do projeto:

```bash
sass --watch style/scss/index.scss:style/css/index.css --style compressed
```

Certifique-se de que o Sass esteja instalado e configurado corretamente no seu sistema antes de executar o comando.

### Estrutura de Diretórios
A estrutura de diretórios do projeto é a seguinte:

```bash
|-- index.html
|-- scss/
|   |-- index.scss
|-- css/
|   |-- index.css
|-- scripts/
|-- assets/
|   |-- ...
```

- **Autor**: [Renan Theodoro](https://renantheodoro.com.br/)


