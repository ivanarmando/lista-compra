import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  Box,
  TextField,
  // Checkbox,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  FormGroup,
  FormControlLabel,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";

const listaInicial = [
  {
    id: 1,
    nome: "Leite condensado",
    quantidade: "12 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 2,
    nome: "Creme de leite",
    quantidade: "16 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 3,
    nome: "Ju - Arroz risoto",
    quantidade: "2 kg",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 4,
    nome: "Arroz normal",
    quantidade: "1 kg",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 5,
    nome: "Macarrão talharine/linguine",
    quantidade: "4 pct",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 6,
    nome: "Queijo ralado",
    quantidade: "8 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 7,
    nome: "Salada folha (JU)",
    quantidade: "8 unid",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 8,
    nome: "Molho passata",
    quantidade: "3 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 9,
    nome: "Molho vermelho",
    quantidade: "3 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 10,
    nome: "Extrato tomate",
    quantidade: "1 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 11,
    nome: "Ovos",
    quantidade: "20 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 12,
    nome: "Leite",
    quantidade: "10 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 13,
    nome: "Toddy",
    quantidade: "1 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 14,
    nome: "Café",
    quantidade: "1 kg",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 15,
    nome: "Açúcar",
    quantidade: "1 kg",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 16,
    nome: "Sal",
    quantidade: "1/2 kg",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 17,
    nome: "Bolacha maizena",
    quantidade: "2 pct grande",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 18,
    nome: "Maionese",
    quantidade: "1 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 19,
    nome: "Suco laranja (JU)",
    quantidade: "2 (3 lts)",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 20,
    nome: "Cebola",
    quantidade: "8 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 21,
    nome: "Alho",
    quantidade: "1 cabeça",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 22,
    nome: "Banana",
    quantidade: "1 dz",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 23,
    nome: "Maçã",
    quantidade: "1 pct",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 24,
    nome: "Limão",
    quantidade: "2 dz",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 25,
    nome: "Abobrinha",
    quantidade: "8 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 26,
    nome: "Tomate rama (JU)",
    quantidade: "2 kg",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 27,
    nome: "Manjericão",
    quantidade: "1 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 28,
    nome: "Batata",
    quantidade: "2kg",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 29,
    nome: "Cenoura",
    quantidade: "1kg",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 30,
    nome: "Guardanapo",
    quantidade: "3 pct",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 31,
    nome: "Papel higiênico",
    quantidade: "20 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 32,
    nome: "Detergente",
    quantidade: "2 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 33,
    nome: "Buchinha",
    quantidade: "1 und",
    checked: false,
    quem: "",
    categoria: "Gerais",
  },
  {
    id: 34,
    nome: "Azeitona",
    quantidade: "1kg",
    checked: false,
    quem: "",
    categoria: "Petiscos",
  },
  {
    id: 35,
    nome: "Beringela caponata",
    quantidade: "1 travessa",
    checked: false,
    quem: "",
    categoria: "Petiscos",
  },
  {
    id: 36,
    nome: "Amendoim japa",
    quantidade: "1kg",
    checked: false,
    quem: "",
    categoria: "Petiscos",
  },
  {
    id: 37,
    nome: "Bolinha de amendoim",
    quantidade: "1kg",
    checked: false,
    quem: "",
    categoria: "Petiscos",
  },
  {
    id: 38,
    nome: "Queijos variados",
    quantidade: "1k",
    checked: false,
    quem: "",
    categoria: "Petiscos",
  },
  {
    id: 39,
    nome: "Calabresa",
    quantidade: "1,5kg",
    checked: false,
    quem: "",
    categoria: "Petiscos",
  },
  {
    id: 40,
    nome: "Batata frita",
    quantidade: "5kg",
    checked: false,
    quem: "",
    categoria: "Petiscos",
  },
  {
    id: 41,
    nome: "Mussarela",
    quantidade: "2 kg",
    checked: false,
    quem: "",
    categoria: "Frios",
  },
  {
    id: 42,
    nome: "Peito frango defumado",
    quantidade: "2 kg",
    checked: false,
    quem: "",
    categoria: "Frios",
  },
  {
    id: 43,
    nome: "Requeijão",
    quantidade: "6 und",
    checked: false,
    quem: "",
    categoria: "Frios",
  },
  {
    id: 44,
    nome: "Manteiga",
    quantidade: "2 und 500g",
    checked: false,
    quem: "",
    categoria: "Frios",
  },
  {
    id: 45,
    nome: "Frango milanesa - petiscos (seara/sadia)",
    quantidade: "4 und",
    checked: false,
    quem: "",
    categoria: "Carnes",
  },
  {
    id: 46,
    nome: "Ancho",
    quantidade: "2 pc",
    checked: false,
    quem: "",
    categoria: "Carnes",
  },
  {
    id: 47,
    nome: "Linguiça cuiabana",
    quantidade: "1 pct",
    checked: false,
    quem: "",
    categoria: "Carnes",
  },
  {
    id: 48,
    nome: "Panceta premium",
    quantidade: "1 und",
    checked: false,
    quem: "",
    categoria: "Carnes",
  },
  {
    id: 49,
    nome: "Costelinha porco",
    quantidade: "1 und",
    checked: false,
    quem: "",
    categoria: "Carnes",
  },
  {
    id: 50,
    nome: "File coxa - frango",
    quantidade: "2 kg",
    checked: false,
    quem: "",
    categoria: "Carnes",
  },
  {
    id: 51,
    nome: "Coração (espetinho)",
    quantidade: "2kg",
    checked: false,
    quem: "",
    categoria: "Carnes",
  },
  {
    id: 52,
    nome: "Farofa",
    quantidade: "1 kg",
    checked: false,
    quem: "",
    categoria: "Carnes",
  },
  {
    id: 53,
    nome: "Sal grosso",
    quantidade: "1kg",
    checked: false,
    quem: "",
    categoria: "Carnes",
  },
  {
    id: 54,
    nome: "Pao de alho",
    quantidade: "4 pct",
    checked: false,
    quem: "",
    categoria: "Carnes",
  },
  {
    id: 55,
    nome: "Queijo coalho",
    quantidade: "4 pct",
    checked: false,
    quem: "",
    categoria: "Carnes",
  },
  {
    id: 56,
    nome: "Bolo de fuba",
    quantidade: "2 und",
    checked: false,
    quem: "",
    categoria: "Lanches",
  },
  {
    id: 57,
    nome: "Pao de queijo (JU)",
    quantidade: "2 kg",
    checked: false,
    quem: "",
    categoria: "Lanches",
  },
  {
    id: 58,
    nome: "Chocolate ao leite",
    quantidade: "9 tabletes",
    checked: false,
    quem: "",
    categoria: "Doces",
  },
];

const categorias = [
  "Todas",
  ...Array.from(new Set(listaInicial.map((item) => item.categoria))),
];

function App() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDeleteDialogOpen = (item) => {
    setItemToDelete(item);
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
    setItemToDelete(null);
  };

  const handleDeleteItem = () => {
    if (itemToDelete) {
      setItens(itens.filter((item) => item.id !== itemToDelete.id));
      handleDeleteDialogClose();
    }
  };
  const [itens, setItens] = useState(listaInicial);
  const [novoItem, setNovoItem] = useState("");
  const [novaQuantidade, setNovaQuantidade] = useState("");
  const [novaCategoria, setNovaCategoria] = useState(categorias[1] || "Gerais");

  const handleCheck = (id) => {
    setItens(
      itens.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleQuem = (id, value) => {
    setItens(
      itens.map((item) => (item.id === id ? { ...item, quem: value } : item))
    );
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (novoItem.trim() === "") return;
    setItens([
      ...itens,
      {
        id: Date.now(),
        nome: novoItem,
        quantidade: novaQuantidade,
        checked: false,
        quem: "",
        categoria: novaCategoria,
      },
    ]);
    setNovoItem("");
    setNovaQuantidade("");
  };

  const handleEditItem = (id, value) => {
    setItens(
      itens.map((item) => (item.id === id ? { ...item, nome: value } : item))
    );
  };

  const handleEditQuantidade = (id, value) => {
    setItens(
      itens.map((item) =>
        item.id === id ? { ...item, quantidade: value } : item
      )
    );
  };

  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");
  const handleFiltro = (e) => {
    setCategoriaFiltro(e.target.value);
  };
  const itensFiltrados =
    categoriaFiltro === "Todas"
      ? itens
      : itens.filter((item) => item.categoria === categoriaFiltro);
  const agrupados = categorias.slice(1).map((cat) => ({
    categoria: cat,
    itens: itensFiltrados.filter((item) => item.categoria === cat),
  }));

  // Função para exportar CSV
  const exportarCSV = () => {
    const colunas = ["Nome", "Quantidade", "Categoria", "Quem vai levar?"];
    const linhas = itens.map((item) =>
      [
        `"${item.nome}"`,
        `"${item.quantidade}"`,
        `"${item.categoria}"`,
        `"${item.quem}"`,
      ].join(",")
    );
    const csv = [colunas.join(","), ...linhas].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "lista_viagem.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        minHeight: "100vh",
        minWidth: "100vw",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar
        position="static"
        color="primary"
        sx={{ width: "100vw", flexShrink: 0 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lista de Itens para Viagem
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          p: 0,
          m: 0,
          width: "100vw",
          height: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card
          elevation={3}
          sx={{
            p: { xs: 1, sm: 3 },
            m: 0,
            width: "100vw",
            height: "100%",
            borderRadius: 0,
            boxShadow: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent
            sx={{
              p: { xs: 1, sm: 3 },
              height: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              overflow: "auto",
            }}
          >
            <Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6} md={4}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={exportarCSV}
                  sx={{ mb: { xs: 2, sm: 0 }, mr: 2 }}
                >
                  Exportar para CSV
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                  <InputLabel id="filtro-categoria-label">
                    Filtrar por categoria
                  </InputLabel>
                  <Select
                    labelId="filtro-categoria-label"
                    id="filtro-categoria"
                    value={categoriaFiltro}
                    label="Filtrar por categoria"
                    onChange={handleFiltro}
                  >
                    {categorias.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Box component="form" onSubmit={handleAddItem} sx={{ mb: 4 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={5} md={6}>
                  <TextField
                    label="Novo item"
                    value={novoItem}
                    onChange={(e) => setNovoItem(e.target.value)}
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                  <TextField
                    label="Quantidade"
                    value={novaQuantidade}
                    onChange={(e) => setNovaQuantidade(e.target.value)}
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                  <FormControl fullWidth>
                    <InputLabel id="nova-categoria-label">Categoria</InputLabel>
                    <Select
                      labelId="nova-categoria-label"
                      value={novaCategoria}
                      label="Categoria"
                      onChange={(e) => setNovaCategoria(e.target.value)}
                      size="small"
                    >
                      {categorias.slice(1).map((cat) => (
                        <MenuItem key={cat} value={cat}>
                          {cat}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={1} md={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    fullWidth
                  >
                    Adicionar
                  </Button>
                </Grid>
              </Grid>
            </Box>
            {categoriaFiltro === "Todas" ? (
              agrupados.map((grupo) => (
                <Box key={grupo.categoria} sx={{ mb: 4, mx: 1 }}>
                  <Typography variant="h6" sx={{ mb: 2, color: "#1976d2" }}>
                    {grupo.categoria}
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <FormGroup>
                    {grupo.itens.map((item, idx) => (
                      <Box
                        sx={{
                          border: "1px solid #ddd",
                          borderRadius: 2,
                          boxShadow: 1,
                          mb: 2,
                          pl: 2,
                          pr: 2,
                          py: 1,
                          bgcolor: idx % 2 === 0 ? "#e3f2fd" : "#fff",
                        }}
                        key={item.id}
                      >
                        <Grid container spacing={2} alignItems="center">
                          {/* Checkbox removido */}
                          <Grid item xs={12} sm={5} md={5}>
                            <TextField
                              value={item.nome}
                              onChange={(e) =>
                                handleEditItem(item.id, e.target.value)
                              }
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={2} md={2}>
                            <TextField
                              label="Qtd."
                              value={item.quantidade || ""}
                              onChange={(e) =>
                                handleEditQuantidade(item.id, e.target.value)
                              }
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={3} md={3}>
                            <TextField
                              placeholder="Quem vai levar?"
                              value={item.quem}
                              onChange={(e) =>
                                handleQuem(item.id, e.target.value)
                              }
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={2}
                            md={2}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              flexWrap: "nowrap",
                              gap: 1,
                              textAlign: { xs: "left", sm: "center" },
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              {item.quem?.trim() ? (
                                <CheckCircleIcon
                                  sx={{ color: "success.main", flexShrink: 0 }}
                                />
                              ) : (
                                <Button
                                  onClick={() => handleDeleteDialogOpen(item)}
                                  color="error"
                                  sx={{
                                    minWidth: 40,
                                    width: 40,
                                    flexShrink: 0,
                                  }}
                                >
                                  <DeleteIcon />
                                </Button>
                              )}
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    ))}
                  </FormGroup>
                </Box>
              ))
            ) : (
              <FormGroup>
                {itensFiltrados.map((item, idx) => (
                  <Box
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: 2,
                      boxShadow: 1,
                      mb: 2,
                      pl: 2,
                      pr: 2,
                      py: 1,
                      bgcolor: idx % 2 === 0 ? "#e3f2fd" : "#fff",
                    }}
                    key={item.id}
                  >
                    <Grid container spacing={2} alignItems="center">
                      {/* Checkbox removido */}
                      <Grid item xs={12} sm={5} md={5}>
                        <TextField
                          value={item.nome}
                          onChange={(e) =>
                            handleEditItem(item.id, e.target.value)
                          }
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={2} md={2}>
                        <TextField
                          label="Qtd."
                          value={item.quantidade || ""}
                          onChange={(e) =>
                            handleEditQuantidade(item.id, e.target.value)
                          }
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={3} md={3}>
                        <TextField
                          placeholder="Quem vai levar?"
                          value={item.quem}
                          onChange={(e) => handleQuem(item.id, e.target.value)}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={2}
                        md={2}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "nowrap",
                          gap: 1,
                          textAlign: { xs: "left", sm: "center" },
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Button
                            onClick={() => handleDeleteDialogOpen(item)}
                            color="error"
                            sx={{ minWidth: 40, width: 40, flexShrink: 0 }}
                          >
                            <DeleteIcon />
                          </Button>
                          {item.quem?.trim() ? (
                            <CheckCircleIcon
                              sx={{ color: "success.main", flexShrink: 0 }}
                            />
                          ) : null}
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </FormGroup>
            )}
          </CardContent>
          <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
            <DialogTitle>Confirmar exclusão</DialogTitle>
            <DialogContent>
              <Typography>
                Tem certeza que deseja excluir o item{" "}
                <b>{itemToDelete?.nome}</b>?
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeleteDialogClose} color="primary">
                Cancelar
              </Button>
              <Button
                onClick={handleDeleteItem}
                color="error"
                variant="contained"
              >
                Excluir
              </Button>
            </DialogActions>
          </Dialog>
        </Card>
      </Container>
    </Box>
  );
}

export default App;
