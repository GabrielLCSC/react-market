const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  console.log("Reducer des produits - action reçue :", action); // Vérifiez si l'action est correctement reçue
  switch (action.type) {
    // Ajoutez vos différents cas de réduction ici
    default:
      return state;
  }
};

export default productReducer;
