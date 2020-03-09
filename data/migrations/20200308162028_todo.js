
exports.up = async function(knex) {
    await knex.schema
        .createTable("projects", table => {
            table.increments("id")
            table.string("name").unique().notNullable()
            table.string("description")
            table.boolean("completed").defaultTo(false)
        })
        .createTable("resources", table => {
            table.increments("id")
            table.string("name").unique().notNullable()
            table.string("description")
        })
        .createTable("tasks", table => {
            table.increments("id")
            table.string("description").notNullable()
            table.string("notes")
            table.boolean("completed").defaultTo(false)
            table.integer("project_id")
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .unsigned()
        })
        .createTable("projects_resources", table => {
            table.integer("project_id")
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .unsigned()
            table.integer("resource_id")
                .references("id")
                .inTable("resources")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .unsigned()
            table.primary(["project_id", "resource_id"])
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists("projects_resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects")
};
