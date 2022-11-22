import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DEFAULT_CARD_COLOR } from "~/config/common.config";
import { BarsArrowDownIcon } from "@heroicons/react/20/solid"

import { PlaylistModel } from "~/models/playlist.model";

import styles from "./Form.module.css";


type FormData = PlaylistModel;

const Form = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      owner: "",
      slug: "",
      spotifyId: "",
      color: DEFAULT_CARD_COLOR,
    }
  });

  const onSubmit = handleSubmit( (data) => {
    setLoading(true);
    console.log(data);

    setTimeout(() => {
      setLoading(false);
    }, 2000)
  })

  return (
    <>
      <div className={styles.root}>
        <form onSubmit={onSubmit}>

          { /** Owner */}
          <div className="mt-3">
            <div className={styles.info}>
              <label className={styles.label}>Owner Name</label>
              {errors.owner && (
                <span className={styles.error}>Required</span>
              )}
            </div>
            
            <div className="mt-1">
              <input
                type="text"
                autoComplete="off"
                className={styles.input}
                {...register("owner", { required: true, maxLength: 60 })}
              />
            </div>
          </div>


          { /** Playlist Name */}
          <div className="mt-3">
            <div className={styles.info}>
              <label className={styles.label}>Playlist Name</label>
              {errors.name && (
                <span className={styles.error}>Required</span>
              )}
            </div>

            <div className="mt-1">
              <input
                type="text"
                autoComplete="off"
                className={styles.input}
                {...register("name", { required: true, maxLength: 60 })}
              />
            </div>
          </div>


          { /** Playlist ID */}
          <div className="mt-3">
            <div className={styles.info}>
              <label className={styles.label}>Playlist ID on Spotify</label>
              {errors.spotifyId && (
                <span className={styles.error}>Required</span>
              )}
            </div>

            <div className={styles.search}>
              <div className={styles.searchWrapper}>
                <div className={styles.searchIconWrapper}>
                  <BarsArrowDownIcon
                    className={styles.searchIcon}
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("spotifyId", { required: true, maxLength: 30 })}
                  className={styles.searchInput}
                />
              </div>
            </div>
          </div>


          { /** Color */}
          <div className="mt-3">
            <div className={styles.info}>
              <label className={styles.label}>Color</label>
              {errors.color && (
                <span className={styles.error}>Hex Color Code required</span>
              )}
            </div>

            <div className="mt-1">
              <input
                type="text"
                autoComplete="off"
                className={styles.input}
                {...register("color", {
                  pattern: RegExp("\\#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"),
                })}
              />
            </div>
          </div>


          { /** Submit */}
          <div className="mt-12 mb-4">
            <button
              className={styles.button}
              type="submit"
            > Add Playlist
              {loading && <span className={styles.loading}>Sending...</span>}
            </button>
          </div>

        </form>
      </div>
    </>
  );
};

export default Form;