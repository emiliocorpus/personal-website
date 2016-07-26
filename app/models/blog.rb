class Blog < ActiveRecord::Base
	validates :title, presence: {:message => "cannot be blank"}
	validates :html, presence: {:message => "content cannot be blank"}
	validates_presence_of :pic_url
end
