import Pagina from "@/components/template/Pagina";
import Menu from "@/components/template/Menu";
import MenuItem from "@/components/template/MenuItem";
import Linha from "@/components/layout/Linha";
import { IconArrowMoveDown, IconArrowMoveUp, IconSourceCode } from "@tabler/icons-react";
import { IconClock } from "@tabler/icons-react";
import { IconComponents } from "@tabler/icons-react";

export default function Home() {
  return (
    <Pagina>
      <Menu>
        <Linha>
          <MenuItem
            icone={<IconSourceCode size={20} />}
            url="hora.html"
            className="bg-gradient-to-r from-red-500 to-yellow-500"
          >
            Hora (Estático)
          </MenuItem>
          <MenuItem
            icone={<IconSourceCode size={20} />}
            url="api/tabela?linhas=5&colunas=7"
            className="bg-gradient-to-r from-red-500 to-yellow-500"
          >
            Tabela
          </MenuItem>
          <MenuItem
            icone={<IconClock size={20} />}
            url="api/hello"
            className="bg-gradient-to-r from-red-500 to-yellow-500"
          >
            Hello
          </MenuItem>
        </Linha>
        <Linha>
          <MenuItem
            icone={<IconComponents size={20} />}
            url="examples/simples"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Componente Simples
          </MenuItem>
          <MenuItem
            icone={<IconClock size={20} />}
            url="examples/evento"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Eventos Simples
          </MenuItem>
          <MenuItem
            icone={<IconArrowMoveDown size={20} />}
            url="examples/direta"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Comunicação Direta
          </MenuItem>
          <MenuItem
            icone={<IconArrowMoveUp size={20} />}
            url="examples/indireta"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Comunicação Indireta
          </MenuItem>
        </Linha>
      </Menu>
    </Pagina>
  );
}
