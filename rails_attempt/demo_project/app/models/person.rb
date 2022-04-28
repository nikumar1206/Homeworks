# == Schema Information
#
# Table name: people
#
#  id         :bigint           not null, primary key
#  name       :string
#  house_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Person < ApplicationRecord
    validates :name, :house, presence: true

    belongs_to :house,
        primary_key: :id,
        foreign_key: :house_id,
        class_name: :House
end
