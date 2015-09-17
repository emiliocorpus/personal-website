class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :title
      t.date :date
      t.string :content

      t.timestamps null: false
    end
  end
end
