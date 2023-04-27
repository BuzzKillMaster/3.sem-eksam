<script async setup>
import TodoCatagoriDropdownComp from '../components/TodoCatagoriDropdownComp.vue';
import ProductOverview from '../components/ProductOverview.vue';

import CustomSelect from "@/components/shared/forms/CustomSelect.vue";
import CustomSelectItem from "@/components/shared/forms/CustomSelectItem.vue";
import BackButton from "@/components/shared/BackButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
// import { ref } from 'vue';

// const test = ret()

</script>
<!-- controllerede inputfelter med use-ref+v-model -->
<template>
    <div class="header">
        <BackButton>Tilbage til sagsstyring</BackButton>
    </div>

    <div class="main-layout">
        <div class="main-left-content">
            <div class="main-content">
                <section class="customer">
                    <h3>Kunde</h3>

                    <div class="search-bar">
                        <div class="search-field">
                            <font-awesome-icon icon="magnifying-glass"/>
                            <input type="search" placeholder="Find kunde...">
                        </div>

                        <p>Opret Ny Kunde</p>

                        <div class="selected-customer">
                            <div>
                                <p>Kunde Navn <span>Kundegruppe</span></p>
                                <p>Telefon nummer</p>
                            </div>

                            <div>
                                <div>
                                    <p>Vejnavn</p>

                                    <p>
                                        <span>Postnummer</span>
                                        <span>Bynavn</span>
                                    </p>
                                </div>

                                <div>
                                    <i>x</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="todos">
                    <h3>Opgaver</h3>

                    <div class="todo-categories-list section-bg">
                        <div class="categories">
                            <TodoCatagoriDropdownComp/>
                            <TodoCatagoriDropdownComp/>
                            <TodoCatagoriDropdownComp/>
                        </div>

                        <div class="create-custom-todo">
                            <i>i</i>
                            <p>Custom Opgave</p>
                        </div>
                    </div>
                </section>

                <section class="details">
                    <h3>Detaljer</h3>

                    <form class="grid-wrapper section-bg">
                        <div class="form-input">
                            <label for="">Ansvarlig</label>

                            <div class="input-field">
                                <CustomSelect>
                                    <CustomSelectItem value="0">Vælg ansvarlig</CustomSelectItem>
                                    <CustomSelectItem value="1">Ansvarlig 1</CustomSelectItem>
                                    <CustomSelectItem value="2">Ansvarlig 2</CustomSelectItem>
                                </CustomSelect>
                            </div>
                        </div>

                        <div class="form-input">
                            <label for="">Status</label>

                            <div class="input-field">
                                <CustomSelect>
                                    <CustomSelectItem value="0">Vælg status</CustomSelectItem>
                                    <CustomSelectItem value="1">Status 1</CustomSelectItem>
                                    <CustomSelectItem value="2">Status 2</CustomSelectItem>
                                </CustomSelect>
                            </div>
                        </div>

                        <div class="form-input">
                            <label for="">Tags</label>

                            <div class="input-field">
                                <CustomSelect>
                                    <CustomSelectItem value="0">Vælg tags</CustomSelectItem>
                                    <CustomSelectItem value="1">Tag 1</CustomSelectItem>
                                    <CustomSelectItem value="2">Tag 2</CustomSelectItem>
                                </CustomSelect>
                            </div>
                        </div>

                        <div class="flex-wrapper">
                            <div class="form-input">
                                <label for="">Afhentning</label>
                                <input class="input-field" type="datetime-local">
                            </div>

                            <div class="form-input">
                                <label for="">Aftalt Pris</label>

                                <div class="price-input">
                                    <input class="input-field" type="number" placeholder="Intern pris">
                                    <p>kr.</p>
                                </div>
                            </div>
                        </div>

                        <div class="form-input description">
                            <label for="">Beskrivelse</label>
                            <textarea class="input-field" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </form>
                </section>

                <section>
                    <ProductOverview/>
                </section>
            </div>
        </div>

        <aside>
            <div class="section-bg">
                <h3>Opsummering</h3>
            </div>

            <div class="create-task">
                <i>i</i>
                <p>Opret Sag</p>
            </div>

        </aside>
    </div>
</template>

<style lang="scss" scoped>
.header {
  padding-bottom: 1rem;
}

.main-layout {
  display: flex;
  gap: 1rem;

  .main-left-content {
    width: 70%;
  }

  aside {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: sticky;
    right: 0;
    top: 0;
    width: 30%;
  }
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

h3 {
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 1rem;
}

.search-bar {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  & > p {
    font-weight: 700;
    cursor: pointer;
  }

  & > p:hover {
    text-decoration: underline;
  }
}

.selected-customer {
  display: none;
}

.search-field {
  background-color: rgb(245 245 245);
  border-radius: var(--border-radius);
  display: flex;
  gap: 1rem;
  padding: 1rem;
}

.section-bg {
  padding: 1rem;
  background-color: rgb(209 213 219);
  border-radius: 0.125rem;
}

.todo-categories-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .categories {
    display: flex;
    gap: 1rem;
  }
}

.create-custom-todo {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  background-color: white;
  padding: 1rem;
  border-radius: 0.125rem;
  cursor: pointer;
}

.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  .form-input {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-weight: 600;
    }

    .input-field {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: white;
      padding: 0.5rem;
      border: 0 solid #e5e7eb;
      border-radius: 0.125rem;
    }
  }

  .description {
    grid-column: span 2;
  }
}

.flex-wrapper {
  display: flex;
  gap: 1rem;

  & > div {
    width: 100%;
  }
}

.price-input {
  position: relative;

  input {
    width: 100%;
  }

  p {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
  }
}

.create-task {
  display: flex;
  gap: 1rem;
  border-radius: 0.125rem;
  background-color: rgb(30 41 59);
  color: rgb(249 250 251);
  padding: 1rem;
  cursor: pointer;
  width: fit-content;
  align-self: end;

  &:hover {
    background-color: rgb(71 85 105);
  }
}
</style>