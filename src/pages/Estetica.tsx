import ContainerEstetica from '../components/ContainerEstetica';

export default function Estetica() {
  return (
    <div className="md:w-9/12 xl:w-8/12 m-auto">
      <div className="m-auto">
        <div>
          <p className="text-sm uppercase">
            CONHEÇA O PROCESSO DE PRODUÇÃO DA headoffice
          </p>
          <p className="text-3xl text-yellow-secondary">Estética Corpo</p>
        </div>
      </div>
      <div className=" m-auto">
        <ContainerEstetica
          image="bg-drenagem1"
          title="Drenagem limfatica"
          subTitle="Remove as toxinas do corpo"
          description="É uma massagem para tratamentos estéticos e outros problemas de saúde, tais como linfedema, má circulação e atenua a celulite. É efetuada através de bombeamentos e de manipulações suaves, ativando os ganglios linfáticos para que a linfa se mova mais facilmente."
        />
        <ContainerEstetica
          image="bg-manicure1"
          revert
          title="Radiofrequencia corporal"
          subTitle="Estimulação do colagénio"
          description="Estimulação do colagénio: previne e corrige o envelhecimento cutaneo; reduz a gordura localizada e a celulite; trata aderências e fibroses; e ajuda no pós-operatório."
        />
        <ContainerEstetica
          image="bg-hifu1"
          title="Hifu corporal"
          subTitle="Estimula a firmeza à pele"
          description="Primeiro é criado um croqui, esboçando a ideia no papel. Ele pode ser criado pela Bautz, pelo cliente em parceria com a Bautz ou exclusivamente pelo cliente."
        />
        <ContainerEstetica
          image="bg-rf-sculpt1"
          revert
          title="RF sculpt"
          subTitle="Elimina a gordura e estimula o músculo"
          description="Este equipamento utiliza uma onda eletromagnética focada de alta energia, denominada tecnologia HI-EMT, que expande e contrai os musculos aumentando as fibras musculares ao mesmo tempo que provoca apoptose das células de gordura.Durante os 30 min do tratamento, os musculos contraem 20.000 vezes; Aumento de 25% de massa magra (musculo); Perda de 30% de massa gorda."
        />
        <ContainerEstetica
          image="bg-estetica3"
          title="Vela shape"
          subTitle="Estimula a firmeza à pele"
          description="Combinação perfeita da radiofrequência com a vacuoterapia e Led para obtenção de resultados excelentes num curto espaço de tempo. 
          Reduz a flacidez, celulite e gosdura localizada, dando firmeza à pela e modelando o corpo."
        />
        <ContainerEstetica
          image="bg-estetica2"
          revert
          title="Laiser podológico"
          subTitle="Eliminação dos fungos das unhas"
          description="Tratamento através de laser com emissão de calor que destroi os fungos presentes nas unhas, tornando o tratamento mais curto e eficaz. Resultados podem ser alcançados entre 3-6 sessões, dependendo da gravidade ou da infecção."
        />
        <ContainerEstetica
          image="bg-estetica-medica2"
          classname="ml-32"
          title="Pressoterapia"
          subTitle="Desincha e modela o corpo"
          description="Desicha e modela o corpo e combate a celulite através de bombeamentos feitos mecanicamente utilizando um sistema de compressão e descompressão. Este tratamento é capaz de reativar o sistema circulatório e linfático.
          São aconcelhadas 1-2 sessões semanais, cada uma com duração de 20-40 minutos."
        />
        <ContainerEstetica
          image="bg-lipo1"
          revert
          title="Lipolaser"
          subTitle="Desincha e modela o corpo"
          description="Este tratamento como objetivo eliminar a gordura localizada. Estimula o processo natural do corpo de excretar a gordura armazenada nos adipócitos para o exterior através da utilização de um laser frio de baxia intensidade. Podem ser efetuadas em varias zonas do corpo, como abdomén, coxas, braços ou duplo queixo."
        />
      </div>

      <div className="w-9/12 m-auto">
        <p className="text-3xl text-yellow-secondary">Cuidados de Beleza</p>
      </div>

      <div className="w-11/12 m-auto">
        <ContainerEstetica
          image="bg-manicure1"
          classname="ml-32"
          title="Manicure"
          description="Primeiro é criado um croqui, esboçando a ideia no papel. Ele pode ser criado pela Bautz, pelo cliente em parceria com a Bautz ou exclusivamente pelo cliente."
        />
        <ContainerEstetica
          image="bg-manicure1"
          classname="ml-56"
          title="Manicure"
          description="Primeiro é criado um croqui, esboçando a ideia no papel. Ele pode ser criado pela Bautz, pelo cliente em parceria com a Bautz ou exclusivamente pelo cliente."
        />
        <ContainerEstetica
          image="bg-manicure1"
          classname="ml-20"
          title="Manicure"
          description="Primeiro é criado um croqui, esboçando a ideia no papel. Ele pode ser criado pela Bautz, pelo cliente em parceria com a Bautz ou exclusivamente pelo cliente."
        />
      </div>
    </div>
  );
}
