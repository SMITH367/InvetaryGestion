const select = "SELECT * FROM productos";
const selectByid = "SELECT * FROM productos WHERE codigo = ?";
const save = "INSERT INTO productos SET ?";
const update = "UPDATE productos SET ? WHERE codigo = ? ";
const clear = "DELETE FROM productos WHERE codigo = ?";

module.exports = {
    select,
    selectByid,
    save,
    update,
    clear

}