exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', table => {
        table.increments();

        table.string('name', 256).notNullable();
        
        //FK
        table
            .integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
